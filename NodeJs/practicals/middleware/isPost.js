const fs = require('fs')
const isPost=async(req,res,next)=>{
    if(req.method==='GET' && req.originalUrl=='/login'){
        console.log('herrrrrrrrrrr',req.originalUrl);
       fs.writeFile('datas.js',(new Date().toLocaleDateString()+' '+req.method), (err) => {
    if (err) {
        console.log('Error saving data:', err);
    } else {
        console.log('Data successfully saved');
    }
})

        
       return  res.status(403).send('post request and login url is  blocked')
    }
    next()
}


module.exports=isPost