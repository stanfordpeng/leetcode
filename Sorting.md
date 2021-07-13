
### [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

Stan 

```
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int left = 0;
        int right = nums.length-1;
        if(right==-1){
            return new int[]{-1,-1};
        }
        int oneIndex = right;
        
        while(left < right){
            int mid = left + (right - left)/2;
            if(nums[mid] > target){
                right = mid;
            }else if(nums[mid] < target){
                left = mid+1;
            }else{
                oneIndex = mid;
                break;
            }
        }
        if(nums[oneIndex]==target){
            int start = oneIndex;
            int end = oneIndex;
            
            while(start>0&&nums[start-1]==target){
                start--;
            }
            while(end< nums.length-1 && nums[end+1]==target){
                end++;
            }
            return new int[]{start, end};
                
        }
            
        return new int[]{-1,-1};
    }
```
