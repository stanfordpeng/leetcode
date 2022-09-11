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
        for(var letter of letters){
            var str = letter;
            build(str, 0);
        }
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

console.log(letterCombinations("23"))