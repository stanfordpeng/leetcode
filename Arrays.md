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

### [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
```
func isValidSudoku(board [][]byte) bool {
    
    // var row = makeTwoDimentionalArray()
    // var col = makeTwoDimentionalArray()
    // var grid = makeTwoDimentionalArray()
    
    // var row = make([][10]bool, 9)
    // var col = make([][10]bool, 9)
    // var grid = make([][10]bool, 9)
    
    // var row = [9][10]bool{}
    // var col = [9][10]bool{}
    // var grid = [9][10]bool{}
    
    var row [9][10]bool
    var col [9][10]bool
    var grid[9][10]bool
    for i:=0; i < 9; i ++ {
        for j:=0; j < 9; j ++ {
            if board[i][j] == '.' {
				continue
			}
            value:=board[i][j] - '0'
            // fmt.Println(value)
            if row[i][value] == true {
                return false
            }
            row[i][value] = true
            
            if col[j][value] == true {
                return false
            }
            col[j][value] = true
            
            gridIndex:= 3*(j/3) + i/3
            
            if grid[gridIndex][value] == true {
                return false
            }
            grid[gridIndex][value] = true
       }
    }
    
    return true
}


// for recording existence
func makeTwoDimentionalArray() [][]bool {
	var twoD [][]bool
	for i := 0; i < 9; i++ {
		oneD := make([]bool, 10)
		twoD = append(twoD, oneD)
	}

	return twoD
}
```