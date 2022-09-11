### [7. Reverse Integer](https://leetcode.com/problems/reverse-integer)

```
func reverse(x int) int {
    var rev = 0;
    for x != 0  {
        lastBit := x % 10
        x = x / 10

        if (rev > 214748364 || ( rev == 214748364 && lastBit > 7)) || ( rev < -214748364 || (rev == -214748364 && lastBit < -8 ))  {
            return 0
        }
        
        rev=rev * 10 + lastBit 
    }
    return rev  
    
}
```