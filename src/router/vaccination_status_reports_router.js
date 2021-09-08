const express = require('express');
const vaccinationStatusReportsController = require('../controller/vaccination_status_reports_controller');

const routes = express();

routes.get('/vaccination_status_reports', vaccinationStatusReportsController.getAll);

module.exports = routes;