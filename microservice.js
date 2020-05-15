const express=require('express');
const timestampRouter=require('./routes/timestamp');

const app =express();

app.use('/api/timestamp/',timestampRouter)

app.listen('3000',()=>{
    console.log("server started");
})