package io.cloudoffice.platform.cockpit.captain;

import io.netty.channel.ChannelPromise;
import java.util.HashMap;
import java.util.Map;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.RunnableFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class Captain implements RunnableFuture, Runnable, Callable {

    Queue<Duty> prioritylist;
    boolean reported = false;
    boolean failed = false;
    boolean success = false;
    boolean close = false;
    Map<String, Object> bag = new HashMap<String, Object>();
    Duty currentDuty;
    Duty errorHandleDuty;
    ChannelPromise assignment;

    public Map<String, Object> bag() {
        return bag;
    }

    public ChannelPromise assignment() {
        return assignment;
    }

    public boolean empty() {
        return prioritylist.isEmpty();
    }

    public void success(boolean success) {
        this.success = success;
        run();
    }

    public boolean success() {
        return success;
    }

    public static Captain plan(ChannelPromise p) {
        return new Captain(p);
    }

    public void deliverAndCloseAssignment() {
        if (!close) {
            reported = true;
            close();
            if (success) {
                assignment.setSuccess();
            } else {
                assignment.setFailure(new Throwable(""));
            }
        }
    }

    public boolean failed() {
        return failed;
    }

    public void failed(boolean cancel) {
        this.failed = true;
        run();
    }

    public Captain(ChannelPromise promise) {
        prioritylist = new ArrayBlockingQueue<Duty>(50);
        assignment = promise;
    }

    /**
     * It can be used only once in an assignment
     *
     * @param t
     * @return
     */
    public Captain begin(Execution t) {
        prioritylist.add(Duty.newDuty(this, t)
                .assign(this)
                .otherwise(false)
                .start(true));
        return this;
    }

    public Captain then(Execution t) {
        prioritylist.add(Duty.newDuty(this, t)
                .assign(this)
                .otherwise(false));
        return this;
    }

    public Captain whenUnexpected(Execution t) {
        prioritylist.add(Duty.newDuty(this, t)
                .assign(this)
                .otherwise(true));
        return this;
    }

    public Captain catchError(Execution t) {
        errorHandleDuty = Duty.newDuty(this, t)
                .assign(this)
                .otherwise(false);
        return this;
    }

    @Override
    public void run() {

        try {
            if (!close) {
                Duty d = prioritylist.poll();
                boolean perform = (!d.otherwise() && this.success()) || (!d.otherwise() && d.start()) || (d.otherwise() && this.failed());
                boolean skipWithFailed = !d.otherwise() && this.failed();
                boolean skipWithSuccess = d.otherwise() && this.success();

                if (perform) {
                    d.execution().execute(d);
                }
                if (skipWithFailed) {
                    d.asExpected(!skipWithFailed);
                }
                if (skipWithSuccess) {
                    d.asExpected(skipWithSuccess);
                }
                currentDuty = d;
            }
        } catch (Exception e) {
            errorHandleDuty.execution().execute(errorHandleDuty);
        }
    }

    @Override
    public boolean cancel(boolean mayInterruptIfRunning) {

        if (mayInterruptIfRunning) {
            assignment.setSuccess(null);
        } else {
            assignment.setFailure(null);
        }
        reported = mayInterruptIfRunning;
        close();
        return currentDuty == null;
    }

    public void close() {
        close = true;
        prioritylist.clear();
    }

    @Override
    public boolean isCancelled() {
        return failed;
    }

    @Override
    public boolean isDone() {
        return reported;
    }

    @Override
    public Object get() throws InterruptedException, ExecutionException {
        return null;
    }

    @Override
    public Object get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException {
        return null;
    }

    @Override
    public Object call() throws Exception {
        run();
        return this;
    }

    public void perform() {
        run();
    }

}
