
const person = {
  name: "Midhun",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Kochi",
    country: {
      name: "India",
      code: "IN"
    }
  },
  skills: {
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: {
      language: "Node.js",
      database: "MongoDB"
    }
  }
};

function flatObject(person,parentKey='',result={}){
  
    for(let key in person){   
        let value=person[key]
        let newKey=parentKey?parentKey+"."+key:key;
        if(typeof value ==='object' && value!==null){
            flatObject(value,parentKey,result)
        }else{
            result[newKey]=value
        } 
  }
return result

  
}

console.log(flatObject(person))


