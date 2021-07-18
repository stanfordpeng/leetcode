
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
EASY
```
public class Solution {
    public int maxArea(int[] height) {
        int maxarea = 0, l = 0, r = height.length - 1;
        while (l < r) {
            maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
            if (height[l] < height[r])
                l++;
            else
                r--;
        }
        return maxarea;
    }
}
```

### [QuickSort1](https://www.hackerrank.com/challenges/quicksort1/problem)

Stan

```
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'quickSort' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    //put less one to left, greater to right
    //5 1 2 3 7 6
    public static List<Integer> quickSort(List<Integer> arr) {
    // Write your code here
    int pivot = arr.get(0);
    int left = 0;
    int right = arr.size() - 1;
    while(left < right){
        while(arr.get(left) <= pivot && left < arr.size() - 1) left++;
        while(arr.get(right) >= pivot && right > 0) right--;
        if(right<left){
            break;
        }
        Collections.swap(arr,left,right);
    }
    Collections.swap(arr,right,0);

    return arr;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        List<Integer> result = Result.quickSort(arr);

        bufferedWriter.write(
            result.stream()
                .map(Object::toString)
                .collect(joining(" "))
            + "\n"
        );

        bufferedReader.close();
        bufferedWriter.close();
    }
}


```
