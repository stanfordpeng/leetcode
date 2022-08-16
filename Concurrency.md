### [34. Print in order](https://leetcode.com/problems/print-in-order/)

```
//We have to use synchronized to lock the current object otherwise exception is thrown java.lang.
//IllegalMonitorStateException: current thread is not owner. Thread can not wait(release the lock) 
//if it doesn't have the lock in the first place
class Foo {
    
     int lockSecond = 0;
     int lockThird = 0;

    public Foo() {
        
    }

    public synchronized void first(Runnable printFirst) throws InterruptedException {
        
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        this.lockSecond = 1;
        notifyAll();
    }

    public synchronized void second(Runnable printSecond) throws InterruptedException {
        
        for (;this.lockSecond == 0;) {
            wait();
        }
        
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        this.lockThird = 1;
        notifyAll();
    }

    public synchronized void third(Runnable printThird) throws InterruptedException {
        for (;this.lockThird == 0;) {
             wait();
        }
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
        notifyAll();
    }
}

 class Foo {
    
     int lockSecond = 0;
     int lockThird = 0;

    public Foo() {
        
    }

    public  void first(Runnable printFirst) throws InterruptedException {
        
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        this.lockSecond = 1;
        notifyAll();
    }

    public synchronized void second(Runnable printSecond) throws InterruptedException {
        
        for (;this.lockSecond == 0;) {
            wait();
        }
        
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        this.lockThird = 1;
        notifyAll();
    }

    public synchronized void third(Runnable printThird) throws InterruptedException {
        for (;this.lockThird == 0;) {
             wait();
        }
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
        notifyAll();
    }
}

```