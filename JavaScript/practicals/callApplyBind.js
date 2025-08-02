
const person={
    name:'Midhun'
}

function say(wish,place,age){
    console.log(`${wish}, I am ${this.name} from ${place} age is ${age}`)
}


// say.call(person,'Hello')

// say.apply(person,['hey','klm',25])

let detail=say.bind(person,'hey')
detail()
