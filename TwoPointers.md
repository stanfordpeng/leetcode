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

```
### [Four sums] (https://leetcode.com/problems/4sum)
always Convert to two pointers

```
func fourSum(nums []int, target int) [][]int {
    sort.Ints(nums)
    var result [][]int = make([][]int,0)
    var size = len(nums)
    
    for i:=0; i < size - 3 ; i++ {
        if i> 0 && nums[i] == nums[i-1] {
            continue
        }
        for j:=i+1 ; j < size -2 ; j++ {
            if j > i+1 && nums[j] == nums[j-1] {
                continue
            }
            
            lo:=j+1
            hi:=size-1
            for lo < hi {
                sum := nums[i] + nums[j] + nums[lo] + nums[hi]
                if sum == target {
                    result = append(result, []int{nums[i], nums[j], nums[lo], nums[hi]})
                    
                    hi--
                    // Skip all duplicates from right
                    for lo < hi && nums[hi]==nums[hi+1] {
                        hi--
                    }
                    
                } else if sum > target {
                    hi--
                } else {
                    lo++
                }
            }
            
        }
    }
    return result
}

```

General solution to any kSum:
```
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        return kSum(nums, target, 0, 4);
    }
	
    public List<List<Integer>> kSum(int[] nums, long target, int start, int k) {
        List<List<Integer>> res = new ArrayList<>();

        // If we have run out of numbers to add, return res.
        if (start == nums.length) {
            return res;
        }
        
        // There are k remaining values to add to the sum. The 
        // average of these values is at least target / k.
        long average_value = target / k;
        
        // We cannot obtain a sum of target if the smallest value
        // in nums is greater than target / k or if the largest 
        // value in nums is smaller than target / k.
        if  (nums[start] > average_value || average_value > nums[nums.length - 1]) {
            return res;
        }
        
        if (k == 2) {
            return twoSum(nums, target, start);
        }
    
        for (int i = start; i < nums.length; ++i) {
            if (i == start || nums[i - 1] != nums[i]) {
                for (List<Integer> subset : kSum(nums, target - nums[i], i + 1, k - 1)) {
                    res.add(new ArrayList<>(Arrays.asList(nums[i])));
                    res.get(res.size() - 1).addAll(subset);
                }
            }
        }
    
        return res;
    }
	
    public List<List<Integer>> twoSum(int[] nums, long target, int start) {
        List<List<Integer>> res = new ArrayList<>();
        int lo = start, hi = nums.length - 1;
    
        while (lo < hi) {
            int currSum = nums[lo] + nums[hi];
            if (currSum < target || (lo > start && nums[lo] == nums[lo - 1])) {
                ++lo;
            } else if (currSum > target || (hi < nums.length - 1 && nums[hi] == nums[hi + 1])) {
                --hi;
            } else {
                res.add(Arrays.asList(nums[lo++], nums[hi--]));
            }
        }
                                                          
        return res;
    }
}
```