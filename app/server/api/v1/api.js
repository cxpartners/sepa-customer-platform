const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/contacts', async (req, res) => {
  const response = await axios.get('https://online.sepa.org.uk/apex/sepaapps/AQPilot/licences');
  res.send({outcome: response.data});
});

router.get('/contacts/:contactId/licenses', async (req, res) => {
  const response = await axios.get('https://online.sepa.org.uk/apex/sepaapps/AQPilot/licences');
  res.send({outcome: response.data});
});

router.use(function (err, req, res, next) {
  let status = err.status || 500

  /* eslint-disable */
  console.log(err);
  /* eslint-enable */

  let msg = err.message || err.stack || err.name || 'General error';

  res.status(status)
    .json({
      error: msg
    })
});

module.exports = router;
