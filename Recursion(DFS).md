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
