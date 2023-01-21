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

[49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)
```
func groupAnagrams(strs []string) [][]string {
    m:=make(map[string][]string)
    for _, s := range strs {
        var key = reorder(s)
        fmt.Println(key)
        // if val, ok := m[key]; ok {
            // fmt.Println("Adding: "+ s)
             m[key] = append(m[key], s)
            //m[key] = val // pass by value, have to point back to the key
            // fmt.Println("v:")
            // fmt.Println(val)
        // }
        // else {
        //     // fmt.Println("init: "+ s)
        //     m[key] = []string{s}
        //     // fmt.Println("v:")
        //     // fmt.Println(m[key])
        // }
    }

    var result [][]string = make([][]string, 0, len(m))
    for _, v := range m {
        fmt.Println(v)
        result = append(result, v)
    }

    return result
    
}

func reorder(s string) string {
    r:=StringToRuneSlice(s)
      sort.Slice(r, func(i, j int) bool {
              return r[i] < r[j]
      })
      return string(r)
}

func StringToRuneSlice(s string) []rune {
      var r []rune
      for _, runeValue := range s {
              r = append(r, runeValue)
      }
      return r
}
```