const axios = require('axios');
const express = require('express');
const app = express();

const port = 3001;
const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies';

app.get('/price', function(req, res) {
  
  
  res.status(200).end();
});

const server = http.createServer((req, res) => {
    const url = req.url;
    axios({ 
      method: 'get', 
      url: `${url}`
    })
    .then(response => {
      console.log(response.data);    
      res.write("Hello World!  $" + response.data.bitcoin.usd);
      res.statusCode = 200;
    })
    .catch(ex => {
      console.log(ex);
    })
    .then(() => res.end());
});

server.listen(8080);
