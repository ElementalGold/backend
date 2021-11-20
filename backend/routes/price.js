var router = require('express').Router();
var axios = require('axios');

const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';

router.get('/:coin/:fiat', async (req, res, next) => {
  const result = await sendPriceRequest(req.params.coin, req.params.fiat);
  res.status(200)
    .setHeader("Access-Control-Allow-Origin", req.headers.origin)
    .json({price: result.price})
    .end();
});

const sendPriceRequest = async (coin, fiat) => {
  const url = apiUrl + '?ids=' + coin + '&vs_currencies=' + fiat;
  var response = await axios.get(url);
  return {
    price: response.data[coin][fiat]
  };
}

module.exports = router;
