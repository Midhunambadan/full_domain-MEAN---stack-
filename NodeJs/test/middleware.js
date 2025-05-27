
const blockGet=async(req,res,next)=>{
    let method=req.method
    if(method=='GET'){
        console.log('get request found ');
        
        res.status(403).send('Get request is blocked')
    }
    next()
}

module.exports=blockGet