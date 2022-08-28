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
            }s
        }
    }
    return resultList
}

```
Time and space complexity: Catalan number bounded
Deduce:(https://zh.m.wikipedia.org/zh/%E5%8D%A1%E5%A1%94%E5%85%B0%E6%95%B0)
 C(2n, n) - C(2n, n+1)
All combination is C(2n, n)
Invalid is C(2n, n+1)


### [2. Path sum 2](https://leetcode.com/problems/path-sum-ii/)
Slice in golang is really tricky!!

```
func pathSum(root *TreeNode, targetSum int) [][]int {
    //dfs
    result := make([][]int, 0)
    dfs(root, make([]int, 0), 0, targetSum, &result)
    return result
    
}

func dfs(curNode *TreeNode, path []int, curSum int,targetSum int, result *[][]int){
    if curNode == nil {
        return
    }
    if curNode.Left == nil && curNode.Right == nil {
        if curSum + curNode.Val == targetSum {
            path = append(path, curNode.Val)
            pathC := append([]int{}, path...)
            *result = append(*result, path)
        }
        return
    }
    dfs(curNode.Left, append(path, curNode.Val), curSum + curNode.Val ,targetSum, result)
    dfs(curNode.Right, append(path, curNode.Val), curSum + curNode.Val ,targetSum, result)
    
}

```