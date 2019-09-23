const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/contacts', async (req, res) => {
  const response = await axios.get('https://online.sepa.org.uk/apex/sepaapps/AQPilot/licences');
  res.send({ outcome: response.data });
});

router.get('/contacts/:contactId/licenses', async (req, res) => {
  const response = await axios.get('https://online.sepa.org.uk/apex/sepaapps/AQPilot/licences');
  res.send({ outcome: response.data });
});

router.use((err, req, res) => {
  let status = err.status || 500;

  /* eslint-disable */
  console.log(err);
  /* eslint-enable */

  const msg = err.message || err.stack || err.name || 'General error';

  res.status(status)
    .json({
      error: msg
    })
});

module.exports = router;
