
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

### [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
Stan

```
class Solution {
    public int maxArea(int[] height) {
        //two pointers
        int start = 0;
        int end = height.length - 1;
        int res = Math.min(height[start],height[end]) * (end - start);
        while(start<end){
            int p1 = start;
            int firstP1 = -1;
            int p2 = end;
            int firstP2 = -1;
            while(p1<end){
                                // System.out.println(p1);
                while(p1 < (height.length - 1) &&height[p1+1]<height[start]) p1++;
                if(p1 < (height.length - 1)){ p1++; firstP1 = (firstP1== -1 ? p1:firstP1) ;}
                res = Math.max(res, Math.min(height[p1],height[end]) * (end - p1));
            }

            while(start<p2){

                // System.out.println(p2);
                while(p2>0&&height[p2-1]<height[end]) p2--;
                if (p2>0) {p2--;firstP2 = (firstP2 == -1 ? p2 :firstP2);}
                res = Math.max(res, Math.min(height[start],height[p2]) * (p2 - start));
            }
            start = firstP1;
            end = firstP2;
            // System.out.println(start);
            // System.out.println(end);
            if(start!=-1&&end!=-1) {
                res = Math.max(res, Math.min(height[start],height[end]) * (end - start));}else{
                break;
            }
        }
        return res;
        
    }
}

```
