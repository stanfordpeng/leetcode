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