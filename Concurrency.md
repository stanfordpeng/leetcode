### [34. Print in order](https://leetcode.com/problems/print-in-order/)

The second solution is faster ? Probably because waking up a thread is more costly. Second solution is more close to positive lock. 


```
//Solution 1:
//25 ms
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
//10 ms 
// Solution 2
// there is no valotile, which means thread will retieve latest value when finishing sleeping
class Foo {
    
    int lockSecond = 0;
    int lockThird = 0;

    public Foo() {
        
    }

    public void first(Runnable printFirst) throws InterruptedException {
        
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        this.lockSecond = 1;
    }

    public void second(Runnable printSecond) throws InterruptedException {
        
        for (;this.lockSecond == 0;) {
            Thread.sleep(1);
        }
        
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        this.lockThird = 1;
    }

    public void third(Runnable printThird) throws InterruptedException {
        for (;this.lockThird==0;) {
            Thread.sleep(1);
        }
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
    }
}
// Solution 3
// 10 ms
class Foo {
    
    volatile int lockSecond = 0;
    volatile int lockThird = 0;

    public Foo() {
        
    }

    public void first(Runnable printFirst) throws InterruptedException {
        
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        this.lockSecond = 1;
    }

    public void second(Runnable printSecond) throws InterruptedException {
        
        for (;this.lockSecond == 0;) {
        }
        
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        this.lockThird = 1;
    }

    public void third(Runnable printThird) throws InterruptedException {
        for (;this.lockThird==0;) {
        }
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
    }
}

```