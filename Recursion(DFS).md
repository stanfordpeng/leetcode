### 1905. [Count Sub Islands](https://leetcode.com/problems/count-sub-islands/)

Stan

```
class Solution {
    int m;
    int n;
    int[][] directions = new int[][]{{1,0},{-1,0},{0,1},{0,-1}};
    int res = 0;
    int[][] grid1;
    boolean contains = true;
    public int countSubIslands(int[][] grid1, int[][] grid2) {
        this.m = grid2.length;
        this.n = grid2[0].length;
        this.grid1 = grid1;
        for(int i = 0; i < m; i++ ){
            for(int j = 0; j < n; j++ ){
                contains = true;
                if(grid2[i][j]==1){
                    dfs(i,j,grid2);
                    if(contains) res++;
                }
            }   
        }
        return res;
    }
    
    public void dfs(int i, int j, int[][] grid){
        if(i<0||i>=m||j<0||j>=n||grid[i][j]==0){
            return;
        }
        if(grid1[i][j] != 1){
            contains = false;
        }
        grid[i][j] = 0;

        for(int[] d : directions){
            dfs(d[0]+i,d[1]+j,grid);
        }
    }
    
    
}
```
Union Find solution:

```
function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, getParent }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }
    function getParent() {
        return parent;
    }
}

const countSubIslands = (g1, g2) => {
    let n = g1.length;
    let m = g1[0].length;
    let ds1 = new DJSet(n * m);
    let ds2 = new DJSet(n * m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i + 1 < n && g1[i][j] == 1 && g1[i + 1][j] == 1) {
                ds1.union(i * m + j, (i + 1) * m + j);
            }
            if (j + 1 < m && g1[i][j] == 1 && g1[i][j + 1] == 1) {
                ds1.union(i * m + j, i * m + j + 1);
            }
            if (i + 1 < n && g2[i][j] == 1 && g2[i + 1][j] == 1) {
                ds2.union(i * m + j, (i + 1) * m + j);
            }
            if (j + 1 < m && g2[i][j] == 1 && g2[i][j + 1] == 1) {
                ds2.union(i * m + j, i * m + j + 1);
            }
        }
    }
    let d = Array(n * m).fill(-1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g2[i][j] == 0) continue;
            let parent2 = ds2.find(i * m + j);
            if (g1[i][j] == 0 || d[parent2] == -2) {
                d[parent2] = -2;
                continue;
            }
            let parent1 = ds1.find(i * m + j);
            if (d[parent2] == -1) {
                d[parent2] = parent1;
            } else if (d[parent2] != parent1) {
                d[parent2] = -2;
            }
        }
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (d[i * m + j] >= 0) res++;
        }
    }
    return res;
};
```
### [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
Kang
```
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0){
        return [];
    }
    var res = [];
    var map = {
        '2': ["a","b","c"],
        '3': ["d","e","f"],
        '4': ["g","h","i"],
        '5': ["j","k","l"],
        '6': ["m","n","o"],
        '7': ["p","q","r","s"],
        '8': ["t","u","v"],
        '9': ["w","x","y","z"]
    };
    var len = digits.length;
    for(var letters of map[digits.charAt(0)]){
        { build(letters, 0); }
    }
    function build(str, index){
        if ( index+1 == len ){
            res.push(str);
        } else {
            var letters = map[digits.charAt(index+1)];
            for(var letter of letters){
                build(str+letter, index+1);
            }
        }
    }
    return res;
};
```

### [39. Combination Sum](https://leetcode.com/problems/combination-sum/)
Kang
```
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function(a, b){return a - b});
    var len = candidates.length;
    var res = [];
    for (var i = 0; i < len ; i++){
        find(i, 0, []);
    }
    function find(index, sum, list){
        var cand = candidates[index];
        list.push(cand);
        sum += cand;
        if ( sum == target ){
            res.push(list);
        }
        if ( sum < target ){
            for (var i = index ; i < len ; i++) {
                var newList = list.slice();
                find(i , sum, newList);
            }
        }
    }
    return res;
};          
```
