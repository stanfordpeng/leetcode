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
### [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/)
```
func multiply(num1 string, num2 string) string {
    if num1=="0" || num2=="0" {
        return "0"
    }
    
    var size1 = len(num1) - 1
    // var size2 = len(num2) - 1

    var results []string
    
    i:=0
    for;size1>=0;size1-- {
        var digit string = string(num1[size1])
        results = append(results,multiplyOneDigit(num2, digit, i))
        i++
    }

    // fmt.Println(results)
    return sum(results)
}

func sum(numbers []string) string {
    
    if len(numbers)==1 {
        return numbers[0]
    }
    
    if len(numbers)==2 {
        return addStrings(numbers[0],numbers[1])
    }
    
    return addStrings(addStrings(numbers[0],numbers[1]), sum(numbers[2:]))
    
    
}

func multiplyOneDigit(number string, digit string, zeros int) string{
    var size = len(number) - 1
    answer:=""
    var carry = 0
    digit1,_:=strconv.Atoi(digit)
    for ;size>=0||carry>0; {
        var digit2 int
        if size >= 0 {
            digit2, _ = strconv.Atoi(string(number[size]))
        }else{
            digit2 = 0
        }
        
        sum := digit1*digit2 + carry
        
        answer = fmt.Sprint(sum%10) + answer
        carry = sum/10
        size--
    }
    for ;zeros > 0;zeros-- {
        answer = answer + "0"
    }
    return answer
}

func addStrings(num1 string, num2 string) string {
    var size1=len(num1)-1
    var size2=len(num2)-1
    var carry = 0
    answer:=""
    for;size1>=0||size2>=0 || carry > 0; {
        var digit1 int
        var digit2 int
        if size1 >= 0 {
            digit1, _= strconv.Atoi(string(num1[size1]))
        } else {
            digit1=0
        }
        if size2>= 0 {
            digit2, _=strconv.Atoi(string(num2[size2]))
        }else {
            digit2=0
        }
        sum:=digit1 + digit2 + carry
        answer =  fmt.Sprint(sum%10) + answer
        carry=sum/10
        size1--
        size2--
        
    }
    
    return answer
}

```