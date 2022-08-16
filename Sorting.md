
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
### [QuickSort-divide&conquer](https://leetcode.com/problems/sort-list/)

#### Go:
```
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

// Time out so we have to devide and conquer first, then use dummy as head to insert
// time: (1 + 2 + 3 + .. + n) = (1+n)/2 * n = 1/2 * n + 1/2 * n^2 = n + n^2

func sortList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
       
    //More than 1 node: 
    result := ListNode {
        Val: head.Val,
        Next: nil,
    }
    //store result referent
    dummy := ListNode {
        Next : &result,
    }
    
    p1 := head.Next
    for p1 != nil {
        //find the least value greater than current val
        index:=dummy.Next
        var prev = &dummy
        for index != nil && index.Val < p1.Val  {
                prev = index
                index=index.Next
        }
        

        //1.back up p1 and move to next
        toInsert := p1
        p1 = p1.Next
        
        //insert after finding the exact index
        prev.Next = toInsert
        toInsert.Next = index
    }
    
    return dummy.Next
    
}

//Divde, sort and merge nlog(n): deivide log(n) times, merge using time n for each time
func sortList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	slow := head
	fast := head.Next
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	nextHalfHead := slow.Next
	slow.Next = nil
	l1 := sortList(head)
	l2 := sortList(nextHalfHead)

	dummy := &ListNode{}
	cur := dummy
	for l1 != nil || l2 != nil {
		if l1 == nil || (l2 != nil && l1.Val >= l2.Val) {
			cur.Next = l2
			l2 = l2.Next
		} else {
			cur.Next = l1
			l1 = l1.Next
		}

		cur = cur.Next
	}

	return dummy.Next
}
```
The first solution failed due to time complexity