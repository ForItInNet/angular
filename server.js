const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./dist/anfFirst')); // myApp will be the same folder name.


app.get('/*', (req, res, next) => {
  res.sendFile('index.html', {root: 'dist/anfFirst/'});
});



app.listen(process.env.PORT || 8080);
//app.listen(8080, 'localhost');
console.log('MyProject Server is Listening on port 8080');
