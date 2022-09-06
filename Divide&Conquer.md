
### [1763. Longest nice string](https://leetcode.com/problems/longest-nice-substring)
```
func longestNiceSubstring(s string) string {
    if len(s) < 2{
        return ""
    }
    runes:=[]rune(s)
    //empty struct take 0 bytes
    //ref: https://gist.github.com/bgadrian/cb8b9344d9c66571ef331a14eb7a2e80
    
    runeSet:= make(map[rune]struct{})
    for i:=0; i < len(runes); i++ {
        runeSet[runes[i]] = struct{}{}
    }
    //find the break point
    for i:=0; i < len(runes); i++ {
        _,containsLower := runeSet[unicode.ToLower(runes[i])]
        _,containsUpper := runeSet[unicode.ToUpper(runes[i])]
        if containsLower && containsUpper {
            continue
        }
        //i is the break point(discarded) now before executing the below code
        prev:=longestNiceSubstring(s[0:i])
        next:=longestNiceSubstring(s[i+1:len(s)])
        if len(prev) >= len(next) {
            return prev
        }
        return next
    }
    return s
}

```