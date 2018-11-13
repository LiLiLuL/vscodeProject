const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/react-redux');

mongoose.connection.on('connected',()=>{
    console.log('mongo connenct success');
})

const models={
    user:{
        'username':{type:String,require:true},
        'pwd':{type:String,require:true},
        'type':{type:String,require:true},
    }
}


for(let  m in models){
    mongoose.model(m,new mongoose.Schema(models[m]));
}
module.exports={
    getModel:function(m){
        console.log(m);
        return mongoose.model(m);
    }
}



