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

### [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/)
```
func intToRoman(num int) string {
    roman:=[]string{"I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"}
    number:=[]int{1,4,5,9,10,40,50,90,100,400,500,900,1000}
    
    result:=""
    for num > 0 {
        var i int = 0
        for ; i < 13 && num > number[i]; i++ {
        }
        //find 1000 or number greater than it, i 0-13
        if i== 13 {
            result+=roman[12]
            num-=number[12]
            continue
        }
        //equal
        if num == number[i] {
            result+=roman[i]
            num-=number[i]
            continue
        }
        //less than num[i]
        result+=roman[i-1]
        num-=number[i-1]

    } 
    return result
    
}

```