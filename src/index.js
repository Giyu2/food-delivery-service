import express from 'express';
import cors from 'cors'

const app = express()
const port = 4000;
app.use(cors())
app.use(express.json())



 
app.use('/', (req, res)=> {
    res.send("This is the test")
});

 
 
app.listen(port, () => {
    console.log(`Example app listening on port  ${port}`);
})