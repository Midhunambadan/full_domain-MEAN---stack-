
//----1. Declare a variable and assign your name.

let firstName='midhun'

//----------2---------------

let num1=10
let num2=20;
[num1,num2]=[num2,num1]
// console.log('num1',num1);


//----------5---------------

let a=51
let b=230
let c=-100

let lar=a
if(b>lar && b>c){
    lar=b
}else if(c>b && c >a){
    lar=c
}else{
    lar=a
}

// console.log(lar)

//-----------7.Convert a string to a number.--------------

let str='10'
let num=parseInt(str)
let str2=String(num)

// console.log(typeof str, typeof num, typeof str2)


//----------------8. Check if a string is a palindrome.---------


function isPalindrome(str){
    for(let i=0;i<str.length;i++){
        if(str[i]!==str[str.length-1-i]){
            return false
        }
    }
    return true
}

// console.log(isPalindrome('kalayalam'));


//---------10. Reverse a string.----------

{
    let str='midhun'.split('').reverse().join('')
    // console.log(str);
}


//---------12.Count vowels in a string----------

{
    let vowels='aeiou'
    let count=0
    let str='midhuni'
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    // console.log(count);
    

}

//------13. Replace all vowels in a string with '*'.----


{
    let vowels='aeiou'
    let name='midhun'
    let res=''

    for(let i=0;i<name.length;i++){
        if(vowels.includes(name[i])){
            res+='*'
        }else{
            res+=name[i]
        }
    }
    // console.log(res);
    
}


//-----14. Capitalize the first letter of a string.-------


let myName='ambadan midhun'

function capitalizeFirstLetter(str){
    let res=''
    for(let i=0;i<str.length;i++){
        if(i===0 ){
            res+=str[0].toUpperCase()
        }else if(str[i-1]===' '){
            res+=str[i].toUpperCase()

        }else{
            res+=str[i]
        }
    }

    return res
}

// console.log(capitalizeFirstLetter(myName));


