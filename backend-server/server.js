const http = require('http');
const axios = require('axios');
const express = require('express');

const app = express();

app.get('/price', function(req, res) {
  res.status(200).end();
});
const server = http.createServer((req, res) => {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    axios({ 
      method: 'get', 
      url: `${apiUrl}`
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
