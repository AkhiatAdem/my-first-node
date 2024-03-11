
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json()); 

let latest = [];
app.use(cors());
app.use(express.json()); 
const port = process.env.PORT || 5173;



app.listen(port,() => {
    console.log('Server is running on port 5173');
});
app.get('/api', (req, res) => {
    res.json(latest);
});

app.post('/send',(req,res)=>{
   latest.push(req.body);
    console.log(req.body);
    res.send('Received'); 
});




