### [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

```
func removeDuplicates(nums []int) int {
    prev:=nums[0]
    
    size:=len(nums)
    count:=size

    for i:=1;i<count;i++{
        if nums[i] == prev {
            nums=append(nums[:i], nums[i+1:]...)
            i--
            count--
        } else{
             prev=nums[i]
        }
    }
    return count
    
}

// func removeDuplicates(nums []int) int {
// 	l := 0
//     for i := 0; i < len(nums); i++ {
// 		if i == 0 || nums[i] != nums[i-1] {
// 			nums[l] = nums[i]
// 			l++
// 		}
// 	}

// 	return l
// }

```

### [27. Remove Element](https://leetcode.com/problems/remove-element/)

```
func removeElement(nums []int, val int) int {
    p:=0
    count:=0
    size := len(nums)
    
    for p < size {
        if nums[p] != val {
            nums[count] = nums[p]
            count++
        }
        p++
    }
    
    return count
}

```

### [31. Next Permutation](https://leetcode.com/problems/next-permutation/)
```
func nextPermutation(nums []int){
    
    var i = len(nums) - 2
    for  i>= 0 && nums[i+1] <= nums[i] {
        i--
    }
    
    if i >= 0 {
        var j = len(nums) - 1
        for nums[j] <= nums[i] {
            j--
        }
        swap(nums, i, j)
    }
    
    reverse(nums, i+1)
}

func reverse(nums []int, start int){
    var i = start
    var j = len(nums) - 1
    for i < j {
        swap(nums, i, j)
        i++
        j--
    }
}

func swap(nums []int, i int, j int){
    var temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp  
}
```


### [48. Rotate Image](https://leetcode.com/problems/rotate-image/)
```
func rotate(matrix [][]int)  {
    var length = len(matrix)
    
    if length == 1 {
        return 
    }
    
    // transpose matrix[i][j] = matrix[j][i]
    for i:= 0; i < length ; i++ {
        for j:=i+1 ; j < length ; j ++  {
            temp:=matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    
    //reverse
    half:=length/2
    
    for i:=0; i < length; i ++ {
        for j:=0; j < half; j ++ {
            temp:=matrix[i][j]
            matrix[i][j] = matrix[i][length-1-j]
            matrix[i][length-1-j] = temp
        }
    }

    
}

```