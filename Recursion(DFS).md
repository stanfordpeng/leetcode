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

