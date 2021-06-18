### [最小好进制](https://leetcode-cn.com/problems/smallest-good-base/)
Guang
```java
class Solution {
    public String smallestGoodBase(String n) {
        long num = Long.parseLong(n);
        for (int len = (int)(Math.log(num) / Math.log(2) + 1); len > 2; len--) {
            long k = (long)Math.pow(num, 1.0 / (len - 1));
            long res = 0;
            for (int i = 0; i < len; i++) {
                res = res * k + 1;
            }
               
            if (res == num) return String.valueOf(k);
        }
        return String.valueOf(num - 1);

    }
}
```
