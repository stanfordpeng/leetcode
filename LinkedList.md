### [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
```
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeKLists(lists []*ListNode) *ListNode {
    var size = len(lists);
    
    // count:=0
    
    var minPointer *ListNode  = nil
    pos:=0
    
    dummyHead := &ListNode{
        Val:0,
        Next: nil,
    }
    pointer := dummyHead
    for true {
        for i:=0; i < size; i++ {
            curPointer := lists[i]
            
            if ( minPointer==nil || (curPointer != nil && curPointer.Val < minPointer.Val)) {
                minPointer = curPointer
                pos=i
            }
        }
        // fmt.Println(*minPointer)
        if minPointer==nil {
            //all are nil in list, time to break
            break
        }
        lists[pos] = minPointer.Next
        minPointer.Next = nil
        pointer.Next = minPointer
        pointer = minPointer
        minPointer = nil
        // count++
    }
    
    return dummyHead.Next
    
}
```

