[347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var len = nums.length;
    var map = new Map();
    for (var i = 0 ; i < len ; i++){
        //add all values to map
        var val = nums[i];
        var num = map.get(val);
        map.set(val, !num ? 1 : num+1)
    }
    
    var list = [];
    
    for (const x of map.entries()) {
      list.push(x);
    }
    
    // O(n log n) time, 
    // Can achieve O(n) with bucket sort 
    // https://leetcode.com/problems/top-k-frequent-elements/discuss/669782/JavaScript-No-Sorting-O(N)-Time
    list.sort((a, b) => a[1] < b[1] ? 1 : -1);
    var res = [];
    for ( var i = 0 ; i < k ; i++ ){
        res.push(list[i][0]);
    }
    return res;
};
```
