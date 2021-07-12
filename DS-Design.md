## 1. [Serialization](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) 

Stan

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Example 1:


Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,2]
Output: [1,2]

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    int curIndex = 0;
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        //recrusion
        if(root == null){
            return "e";
        }
        String left = serialize(root.left);
        String right = serialize(root.right);
        return root.val+ "/" + left + "/" +right;
        
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        System.out.println(data);
        String[] arr = data.split("/");
        int len = arr.length;
        return preorder(arr,curIndex);
    }
    
    TreeNode preorder(String[] arr, int curIndex){
        String s = arr[curIndex];
        TreeNode cur;
        if(s.equals("e")){
            cur = null;
        }else{
            cur = new TreeNode(Integer.valueOf(s));
        }
        if(cur == null) {return null;}
        TreeNode left = preorder(arr,++this.curIndex);
        TreeNode right = preorder(arr,++this.curIndex);
        cur.left = left;
        cur.right = right;
        return cur;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));
```

## 2. [Min Stack](https://leetcode.com/problems/min-stack/solution/)

Stan 

```
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.store = [];
    this.minStore = [];
    // var min ;
    // var minIndex;
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.minStore.length == 0){
        this.minStore.push(val);
    }else{
        let min = this.minStore[this.minStore.length -1];
        if(val < min ){
            this.minStore.push(val);
        }else{
            this.minStore.push(min);
        }
    }
    this.store.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.store.pop();
    this.minStore.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.store[this.store.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStore[this.minStore.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

```
## 3. [LRU Cache](https://leetcode.com/problems/lru-cache/solution/)

Stan

```
/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
class LRUCache {
    Map<Integer,Integer> map = new HashMap<>();
    
    LinkedHashSet<Integer> keysOrder = new LinkedHashSet<>();
    
    int capacity;
    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {
        System.out.println(key);
        if(map.containsKey(key)){
            keysOrder.remove(new Integer(key));
            keysOrder.add(key);
            return map.get(key);
        }
        

        
        return -1;
    }
    
    public void put(int key, int value) {
        
        if(map.containsKey(key)){
            System.out.println("Update: "+key);
            map.put(key,value);
            keysOrder.remove(new Integer(key));
            keysOrder.add(key);
            
        }else{
            // System.out.println("put: " + key);
            keysOrder.add(key);
            int size = keysOrder.size();
            if(size>capacity){
                System.out.println("added over capacity: " + key);
                Iterator<Integer> itr = keysOrder.iterator();
                Integer discarded = itr.next();
                // System.out.println("discarded: "+discarded);
                keysOrder.remove(discarded);
                map.remove(discarded);
            }
            map.put(key,value);
            
        }
        
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
```
