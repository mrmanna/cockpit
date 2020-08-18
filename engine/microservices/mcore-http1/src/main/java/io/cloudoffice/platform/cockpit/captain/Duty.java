package io.cloudoffice.platform.cockpit.captain;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.RunnableFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class Duty implements RunnableFuture {

    Captain captain;
    boolean done;
    boolean cancel;
    String comment;
    boolean otherwise;
    boolean start;
    Execution execution;

    public Execution execution(){
        return this.execution;
    }
    public Duty(Captain c, Execution execution) {
        this.captain = c;
        this.execution = execution;
    }

    public Captain captain() {
        return captain;
    }

    public static Duty newDuty(Captain c, Execution execution) {
        return new Duty(c, execution);
    }

    public boolean start() {
        return start;
    }

    public Duty start(boolean start) {
        this.start = start;
        return this;
    }

    public Duty otherwise(boolean b) {
        this.otherwise = b;
        return this;
    }

    public boolean otherwise() {
        return this.otherwise;
    }

    @Override
    public void run() {
        perform(this.captain);
    }

    public void perform(Captain s) {
    }

    public void asExpected(boolean done) {
        this.done = done;
        if (done) {
            this.captain.success(done);
        } else {
            failed(true);
        }
    }
    private void failed(boolean cancel) {
        this.cancel = cancel;
        this.captain.failed(cancel);
    }

    public void comment(String comment) {
        this.comment = comment;
    }

    public String comment() {
        return this.comment;
    }

    Duty assign(Captain s) {
        this.captain = s;
        return this;
    }

    public void close() {
        this.captain = null;
    }

    @Override
    public boolean cancel(boolean mayInterruptIfRunning) {
        close();
        return true;
    }

    @Override
    public boolean isCancelled() {
        return cancel;
    }

    @Override
    public boolean isDone() {
        return done;
    }

    @Override
    public Object get() throws InterruptedException, ExecutionException {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Object get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
