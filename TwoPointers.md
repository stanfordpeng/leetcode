### [Three sums] (https://leetcode.com/problems/3sum)
Two/Three pointers with sorting
```
func threeSum(nums []int) [][]int {
    sort.Ints(nums)
    length:= len(nums)
    
    if nums[0] > 0 || nums[length-1] < 0 {
        return make([][]int,0)
    }
    
    var result [][]int
	for num1Idx := 0; num1Idx < length-2; num1Idx++ {

		// num1Idx>0 ensures this check is made only from 2nd element onwards
        // skip the same element
		if num1Idx > 0 && nums[num1Idx] == nums[num1Idx-1] {
			continue
		}
        //twp pointers -> three pointers
		num2Idx := num1Idx + 1
		num3Idx := length - 1
		for num2Idx < num3Idx {
			sum := nums[num2Idx] + nums[num3Idx] + nums[num1Idx]
			if sum == 0 {
				// Add triplet to result
				result = append(result, []int{nums[num1Idx], nums[num2Idx], nums[num3Idx]})

				num3Idx--

				// Skip all duplicates from right
				for num2Idx < num3Idx && nums[num3Idx] == nums[num3Idx+1] {
					num3Idx--
				}
			} else if sum > 0 {
				// Decrement num3Idx to reduce sum value
				num3Idx--
			} else {
				// Increment num2Idx to increase sum value
				num2Idx++
			}
		}
	}
    return result
}  




```