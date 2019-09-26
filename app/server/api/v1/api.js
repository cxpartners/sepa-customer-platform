const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/organisations', async (req, res) => {
  const response =
    await axios.get('https://online.sepa.org.uk/apex/sepaapps/AQPilot/contacts');
  return res.send({ organisations: response.data.items });
});

// Get all contacts for an organisation

router.get('/organisations/:orgName/contacts', async (req, res, next) => {
  let data;
  try {
    if (!req.params.orgName) {
      const error = new Error();
      error.message = 'Organisation name';
      error.status = 500;
      return next(error);
    }

    const organisationName = decodeURIComponent(req.params.orgName.toLowerCase());

    const response =
      await axios.get('https://online.sepa.org.uk/apex/sepaapps/AQPilot/contacts');
    data = response.data.items.filter(item => item.organisation_name.toLowerCase() === organisationName);
  } catch (error) {
    error.status = 500
    return next(error)
  }

  return res.send({ contacts: data });
});

// Get all licenses for a organisation
router.get('/organisations/:orgName/licences', async (req, res, next) => {
  let data;
  try {
    if (!req.params.orgName) {
      const error = new Error();
      error.message = 'Organisation name';
      error.status = 500;
      return next(error);
    }

    const organisationName = decodeURIComponent(req.params.orgName.toLowerCase());

    const response =
      await axios.get('https://online.sepa.org.uk/apex/sepaapps/AQPilot/licences');
    data = response.data.items.filter(item => item.principal_contact.toLowerCase() === organisationName);
  } catch (error) {
    error.status = 500
    return next(error)
  }

  return res.send({ licences: data });
});

// Get all licenses for a organisation
router.get('/licences/:licenceId', async (req, res, next) => {
  let data;
  try {
    if (!req.params.licenceId) {
      const error = new Error();
      error.message = 'Licenses id';
      error.status = 500;
      return next(error);
    }

    const licenceId = decodeURIComponent(req.params.licenceId);
    let response =
      await axios.get(`https://online.sepa.org.uk/apex/sepaapps/AQPilot/licences/${licenceId}`);
    data = response.data.items && response.data.items.length ? response.data.items[0] : {};
  } catch (error) {
    error.status = 500
    return next(error)
  }

  return res.send(data);
});

// Get all licenses for a organisation
router.get('/licences/:licenceId/contacts', async (req, res, next) => {
  let data;
  try {
    if (!req.params.licenceId) {
      const error = new Error();
      error.message = 'Licenses id';
      error.status = 500;
      return next(error);
    }

    const licenceId = decodeURIComponent(req.params.licenceId);

    let response =
      await axios.get(`https://online.sepa.org.uk/apex/sepaapps/AQPilot/contacts/${licenceId}`);
    data = response.data.items && response.data.items.length ? response.data.items : {};
  } catch (error) {
    error.status = 500
    return next(error)
  }

  return res.send({ contacts: data });
});

// Get all licenses conditions - Authorisation rule
// Get all licenses for a organisation
router.get('/licences/:licenceId/locations', async (req, res, next) => {
  let data;
  try {
    if (!req.params.licenceId) {
      const error = new Error();
      error.message = 'Licenses id';
      error.status = 500;
      return next(error);
    }

    const licenceId = decodeURIComponent(req.params.licenceId);

    let response =
      await axios.get(`https://online.sepa.org.uk/apex/sepaapps/AQPilot/licensed-locations/${licenceId}`);
    data = response.data.items && response.data.items.length ? response.data.items : {};
  } catch (error) {
    error.status = 500
    return next(error)
  }

  return res.send({ locations: data });
});


// Get all licenses conditions - Location rule
// Get all licenses for a organisation
router.get('/licences/:licenceId/activities', async (req, res, next) => {
  let data;
  try {
    if (!req.params.licenceId) {
      const error = new Error();
      error.message = 'Licenses id';
      error.status = 500;
      return next(error);
    }

    const licenceId = decodeURIComponent(req.params.licenceId);

    let response =
      await axios.get(`https://online.sepa.org.uk/apex/sepaapps/AQPilot/licensed-activities/${licenceId}`);
    data = response.data.items && response.data.items.length ? response.data.items : {};
  } catch (error) {
    error.status = 500
    return next(error)
  }

  return res.send({ activities: data });
});

// Get all licenses for a organisation
router.get('/licences/:licenceId/conditions', async (req, res, next) => {
  let data;
  try {
    if (!req.params.licenceId) {
      const error = new Error();
      error.message = 'Licenses id';
      error.status = 500;
      return next(error);
    }

    const licenceId = decodeURIComponent(req.params.licenceId);

    let response =
      await axios.get(`https://online.sepa.org.uk/apex/sepaapps/AQPilot/licensed-conditions/${licenceId}`);
    data = response.data.items && response.data.items.length ? response.data.items : {};
  } catch (error) {
    error.status = 500
    return next(error)
  }

  return res.send({ conditions: data });
});


// Get all licenses for a organisation
router.get('/licences/:licenceId/tasks', async (req, res, next) => {
  let data;
  try {
    if (!req.params.licenceId) {
      const error = new Error();
      error.message = 'Licenses id';
      error.status = 500;
      return next(error);
    }

    const licenceId = decodeURIComponent(req.params.licenceId);

    let response =
      await axios.get(`https://online.sepa.org.uk/apex/sepaapps/AQPilot/licence-tasks/${licenceId}`);
    data = response.data.items && response.data.items.length ? response.data.items : {};
  } catch (error) {
    error.status = 500
    return next(error)
  }

  return res.send({ tasks: data });
});


router.use((err, req, res, next) => {
  const status = err.status || 500;

  /* eslint-disable */
  console.log(err);
  /* eslint-enable */

  const msg = err.message || err.stack || err.name || 'General error';

  return res.status(status).send({error: msg});
});

module.exports = router;
