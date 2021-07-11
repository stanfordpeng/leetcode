# Recursion and Backtrack
Stan

Recursion经常与DFS出现一起，因为Recursion经常通过将大的问题分解为多个小问题层层递归到最深的一个问题。backtrack也需要recursion实现，recursion本质是利用了函数栈来实现，问题分解成小问题，每个小问题都放入一个函数栈和单独的scope,使得这种方法既简明又强大：
Example：
1. Recursion

leetcode 206. Reverse Linked List
```
public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null) return head;
    ListNode p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}
```

2. DFS Search

Leetcode / 力扣 695. Max Area of Island (Medium)

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
```
private int m, n;
private int[][] direction = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

public int maxAreaOfIsland(int[][] grid) {
    if (grid == null || grid.length == 0) {
        return 0;
    }
    m = grid.length;
    n = grid[0].length;
    int maxArea = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            maxArea = Math.max(maxArea, dfs(grid, i, j));
        }
    }
    return maxArea;
}

private int dfs(int[][] grid, int r, int c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) {
        return 0;
    }
    grid[r][c] = 0;
    int area = 1;
    for (int[] d : direction) {
        area += dfs(grid, r + d[0], c + d[1]);
    }
    return area;
}

```

3. Backtrack

Leetcode / 力扣 17. Letter Combinations of a Phone Number (Medium)



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

```
private static final String[] KEYS = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

public List<String> letterCombinations(String digits) {
    List<String> combinations = new ArrayList<>();
    if (digits == null || digits.length() == 0) {
        return combinations;
    }
    doCombination(new StringBuilder(), combinations, digits);
    return combinations;
}

private void doCombination(StringBuilder prefix, List<String> combinations, final String digits) {
    if (prefix.length() == digits.length()) {
        combinations.add(prefix.toString());
        return;
    }
    int curDigits = digits.charAt(prefix.length()) - '0';
    String letters = KEYS[curDigits];
    for (char c : letters.toCharArray()) {
        prefix.append(c);                         // 添加
        doCombination(prefix, combinations, digits);
        prefix.deleteCharAt(prefix.length() - 1); // 删除
    }
}

```
# Graph
Stan

Graph问题第一步是建图，一般用到HashMap,节点数目固定则是用Array

普遍认为Graph在内存中三种表现方式：

https://www.javatpoint.com/graph-theory-graph-representations


210. Course Schedule II (Medium)

```
public int[] findOrder(int numCourses, int[][] prerequisites) {
    List<Integer>[] graphic = new List[numCourses];
    for (int i = 0; i < numCourses; i++) {
        graphic[i] = new ArrayList<>();
    }
    for (int[] pre : prerequisites) {
        graphic[pre[0]].add(pre[1]);
    }
    Stack<Integer> postOrder = new Stack<>();
    boolean[] globalMarked = new boolean[numCourses];
    boolean[] localMarked = new boolean[numCourses];
    for (int i = 0; i < numCourses; i++) {
        if (hasCycle(globalMarked, localMarked, graphic, i, postOrder)) {
            return new int[0];
        }
    }
    int[] orders = new int[numCourses];
    for (int i = numCourses - 1; i >= 0; i--) {
        orders[i] = postOrder.pop();
    }
    return orders;
}

private boolean hasCycle(boolean[] globalMarked, boolean[] localMarked, List<Integer>[] graphic,
                         int curNode, Stack<Integer> postOrder) {

    if (localMarked[curNode]) {
        return true;
    }
    if (globalMarked[curNode]) {
        return false;
    }
    globalMarked[curNode] = true;
    localMarked[curNode] = true;
    for (int nextNode : graphic[curNode]) {
        if (hasCycle(globalMarked, localMarked, graphic, nextNode, postOrder)) {
            return true;
        }
    }
    localMarked[curNode] = false;
    postOrder.push(curNode);
    return false;
}

```

# Union Find

在计算机科学中，并查集（英文：Disjoint-set data structure，直译为不交集数据结构）是一种数据结构，用于处理一些不交集（Disjoint sets，一系列没有重复元素的集合）的合并及查询问题。并查集支持如下操作：

查询：查询某个元素属于哪个集合，通常是返回集合内的一个“代表元素”。这个操作是为了判断两个元素是否在同一个集合之中。
合并：将两个集合合并为一个。
添加：添加一个新集合，其中有一个新元素。添加操作不如查询和合并操作重要，常常被忽略。
由于支持查询和合并这两种操作，并查集在英文中也被称为联合-查找数据结构（Union-find data structure）或者合并-查找集合（Merge-find set）。

吃鸡跟随问题就是典型的并查集问题：

Example：
685. 冗余连接 II
```
class Solution {
    public int[] findRedundantDirectedConnection(int[][] edges) {
        int nodesCount = edges.length;
        UnionFind uf = new UnionFind(nodesCount + 1);
        int[] parent = new int[nodesCount + 1];
        for (int i = 1; i <= nodesCount; ++i) {
            parent[i] = i;
        }
        int conflict = -1;
        int cycle = -1;
        for (int i = 0; i < nodesCount; ++i) {
            int[] edge = edges[i];
            int node1 = edge[0], node2 = edge[1];
            if (parent[node2] != node2) {
                conflict = i;
            } else {
                parent[node2] = node1;
                if (uf.find(node1) == uf.find(node2)) {
                    cycle = i;
                } else {
                    uf.union(node1, node2);
                }
            }
        }
        if (conflict < 0) {
            int[] redundant = {edges[cycle][0], edges[cycle][1]};
            return redundant;
        } else {
            int[] conflictEdge = edges[conflict];
            if (cycle >= 0) {
                int[] redundant = {parent[conflictEdge[1]], conflictEdge[1]};
                return redundant;
            } else {
                int[] redundant = {conflictEdge[0], conflictEdge[1]};
                return redundant;
            }
        }
    }
}

class UnionFind {
    int[] ancestor;

    public UnionFind(int n) {
        ancestor = new int[n];
        for (int i = 0; i < n; ++i) {
            ancestor[i] = i;
        }
    }

    public void union(int index1, int index2) {
        ancestor[find(index1)] = find(index2);
    }

    public int find(int index) {
        if (ancestor[index] != index) {
            ancestor[index] = find(ancestor[index]);
        }
        return ancestor[index];
    }
}

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/redundant-connection-ii/solution/rong-yu-lian-jie-ii-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```
# BFS

# 双指针与头插法

# Presum Array

# BIT(binary indexed tree)

# segment tree

# More About Google:
Here's a list of topics I found helpful for Google. These are based on questions I found tagged with Google across LeetCode and conversations with recruiters/interview-experiences.

*Topological sort
*DFS/BFS
*2-D Matrix Prefix Sum
*Binary Search over functions
*Quick sort/Quick select
*Merge sort
*Dijkstra/Bellman Ford/ Floyd Warshall/ Kruskals Minimum Spanning Tree
*UnionFind
*Trie
*Min-max Games
*Cycle Detection
*Intervals
*Segment Tree
*KMP
*Bridges/Articulation point/Tarjan SCC
*Euler's Path/Circuit/Hierholzer's Algorithm

Note that this is more topics than you would expect for other companies. Google really does try to emphasise on DSA questions more than most other companies. Still topics 13 to 16 are (somewhat) optional with it being rarer to see direct questions.

Amazon relies a lot more on design and leadership for SDE-2 onwards.
Facebook favours implementation speed in DSA with 2 LeetCode Mediums (ideally, both solved with code!) rather than harder questions.
Google asks LeetCode Mediums and occasionally Hards. It's less rushed than Facebook but expect follow-ups.

A lot of the more obscure topics above like Segment Tree, Bridges, KMP, you can expect them to ask you in follow-up rather than the core questioning absolutely requiring them. So they are sort of optional but definitely leave a good impression in follow-ups.

And they typically don't expect as much (sometimes, zero) code for the follow-ups.

Google also has points for code style so do spend a few hours going through their style code: https://google.github.io/styleguide/javaguide.html
Again, it's optional brownie points and doesn't matter if you can't solve the base questions. But it's a good guide to follow during work/LeetCode too :)
