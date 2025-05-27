
const isPost=async(req,res,next)=>{
    if(req.method==='POST' && req.originalUrl=='/login'){
        console.log('herrrrrrrrrrr',req.originalUrl);
        
       return  res.status(403).send('post request and login url is  blocked')
    }
    next()
}


module.exports=isPost