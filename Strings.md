
### [CamelCase](https://www.hackerrank.com/challenges/camelcase/problem)
HackerRank

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
     * Complete the 'camelcase' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts STRING s as parameter.
     */
    //calculate how many uppercase letters there are
    public static int camelcase(String s) {
        // Write your code here
        int res = 1;
        for(char c : s.toCharArray()){
            if(c == Character.toUpperCase(c)){
                res++;
            }
        }
        return res;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        int result = Result.camelcase(s);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

```

### [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
```
func longestCommonPrefix(strs []string) string {
    index:=0
    for {
        var c byte
        if index < len(strs[0])  {
            c =  strs[0][index]
        }  else {
            return strs[0][0:index]
        } 
        
        for _, s:= range strs {
            if index >= len(s) || s[index] != c {
                return s[0:index]
            }
        }
        index++
    }
}

```

### [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
```
func strStr(haystack string, needle string) int {
    size:=len(haystack)
    sizeNeedle:=len(needle)
    for i:=0;i<size;i++ {
        if i+sizeNeedle <= size && haystack[i:i+sizeNeedle] == needle {
            return i
        }
    }
    return -1
    
}
```

### [38. Count and Say](https://leetcode.com/problems/count-and-say/)
```
func countAndSay(n int) string {
    //dp
    // dp := make([]int,n)
    
    //recursive
    var result = "1"
    var count = 1
    for count<n {
        var sb strings.Builder
        cur:=rune(result[0])
        amount:=0
        for _,r := range result {
            if r==cur {
                amount++
            }else {
                sb.WriteString(strconv.Itoa(amount))
                sb.WriteRune(cur)
                cur=r
                amount=1
            }
        }
        sb.WriteString(strconv.Itoa(amount))
        sb.WriteRune(cur)
        result=sb.String()
        count++
    }
    return result
}

```