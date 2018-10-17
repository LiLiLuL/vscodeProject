const fs=require("fs");
const gm=require("gm");


gm('./public/images/img25.jpg')
   .resize(100,100)
   .write('./public/images/imgtest.jpg',(err)=>{
       if(!err){
           console.log("done")
       }else{
           console.log(err)
       }
   });
   gm('./public/images/img27.jpg').crop(141,96,152,181).write('./public/images/cropimage.jpg',err=>{
       
   })
