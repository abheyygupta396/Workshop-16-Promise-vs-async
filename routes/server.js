const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/workshop17',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
     }

)
.then(() => {
    console.log('Database connected');
}).catch(err=>{
    console.log(err)
});
