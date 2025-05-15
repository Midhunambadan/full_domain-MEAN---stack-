
//---------shallow copy----------
const orginal={a:1,b:2,c:{d:5}}
const shallow={...orginal}

shallow.a=200
shallow.c.d=300

// console.log(orginal);
//--------------------------------------------

//----------------deepy copy----------

function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
}

const orginal1= {key:'hello',nested:{a:1,b:2}}

const copy=deepCopy(orginal1)

copy.key='hey'
copy.nested.a=30
console.log('orginal1',orginal1);
console.log('copy',copy);

