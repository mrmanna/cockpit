package io.cloudoffice.platform.cockpit.api.captain;

import io.cloudoffice.platform.cockpit.api.Logger;
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
    boolean given = false;
    boolean close = false;
    Map<String, Object> bag = new HashMap<String, Object>();
    Duty currentDuty;
    Duty errorHandleDuty;
    Captain reportingCaptain;

    public void given(boolean given) {
        this.given = given;
    }

    public boolean given() {
        return this.given;
    }

    public Map<String, Object> bag() {
        return bag;
    }

    public Captain reporting() {
        return reportingCaptain;
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

    public static Captain plan(Captain p) {
        return new Captain(p);
    }

    public static Captain plan() {
        return new Captain();
    }

    public void deliverAndCloseAssignment() {
        //  reported = true;
        close();
//        if (asExpected) {
//            reportingCaptain.asExpected(asExpected);
//        } else {
//            reportingCaptain.failed(true);
//        }
    }

    public boolean failed() {
        return failed;
    }

    public void failed(boolean cancel) {
        this.failed = true;
        run();
    }

    public Captain() {
        prioritylist = new ArrayBlockingQueue<Duty>(50);
    }

    public Captain(Captain promise) {
        prioritylist = new ArrayBlockingQueue<Duty>(50);
        reportingCaptain = promise;
    }

    /**
     * It can be used only once in an reportingCaptain
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
                boolean perform = (!d.otherwise() && this.success()) || d.start() || (d.otherwise() && this.failed());
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
        } catch (Exception any) {
            Logger.log(any.getMessage());
        }
    }

    @Override
    public boolean cancel(boolean mayInterruptIfRunning) {
        reported = mayInterruptIfRunning;
        close();
        return currentDuty == null;
    }

    public void close() {
        if (!close) {
            close = true;
            prioritylist.clear();
            prioritylist = null;
        }
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
