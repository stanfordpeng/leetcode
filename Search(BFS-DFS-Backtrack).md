### [1. Generate Parenthesis](https://leetcode.com/problems/generate-parentheses/)

DFS and backtrack as we can see open bracket has to be greater than or equal to close bracket at any point of the string
```
func generateParenthesis(n int) []string {
    resultList:=make([]string,0)
    backtrack(&resultList, "", 0, 0, n)
    return resultList
}

func backtrack(stringList *[]string, s string, open int,  end int,  max int) {
    if len(s) == max*2 {
        *stringList = append(*stringList,s)
        return
    }
    
    if open < max {
        // s=s+"("
        backtrack(stringList, s+"(", open+1, end, max)
    }
    if end < open {
        backtrack(stringList, s + ")", open, end+1, max)
    }
}
```
