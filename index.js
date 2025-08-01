import express from 'express'
const app = express();
app.get('/profile',(req,res)=>{
    res.send("Hello This is express talking");
});
app.listen(8000);