const eventEmiiter=require('events')
const emitter=new eventEmiiter()

emitter.on('say',(name)=>{
    console.log(`hello ${name}`);
    
})

emitter.on('poi',(name)=>{
    console.log(`hello ${name}`);
    
})

emitter.emit('poi','midhun')
emitter.emit('say','Ambadan')