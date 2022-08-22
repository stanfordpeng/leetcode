### [1. Generate Parenthesis](https://leetcode.com/problems/generate-parentheses/)

DP--hard
Recurrence relation：
For n, (a)b a+b+1=n, a,b represents the valid combination when it is either n or b
```

func generateParenthesis(n int) []string {
    resultList:=make([]string,0)
    if n== 0 {
        resultList=append(resultList,"")
    } else{
        for i:=0; i < n; i++ {
            for _,l := range generateParenthesis(i) {
                for _,r := range generateParenthesis(n-1-i) {
                    resultList=append(resultList, "("+ l +")"+r)
                }
            }
        }
    }
    return resultList
}

```
