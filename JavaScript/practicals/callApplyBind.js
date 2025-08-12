
const person={
    name:'Midhun'
}

function say(wish,place,age){
    console.log(`${wish}, I am ${this.name} from ${place} age is ${age}`)
}


say.call(person,'Hello','klm',25)


// say.apply(person,['hi','klm',25])

// let detail=say.bind(person,'hey','klm',25)
// detail()
