let string='mallayalam'

function isPalindrome(str){
    let len=str.length
    for(let i=0;i<len;i++){
        if(str[i]!==str[str.length-1-i]){
            return 'Not palindrom'
        }
    }

    return 'Palindrom '
}

console.log(isPalindrome(string))