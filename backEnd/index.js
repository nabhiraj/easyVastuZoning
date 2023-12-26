const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/getToken',(req,res)=>{
    res.json({'tokenValue':'yetrh2ndk*&$teg'});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//



const port = 5000;
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});