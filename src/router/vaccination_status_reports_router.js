const express = require('express');
const vaccinationStatusReportsController = require('../controller/vaccination_status_reports_controller');

const routes = express();

routes.get('/vaccination_status_reports', vaccinationStatusReportsController.getAll);
routes.get('/vaccination_status_reports/:id', vaccinationStatusReportsController.getById);
routes.get('/vaccination_status_reports/nip_no/:nip_no', vaccinationStatusReportsController.getByNIP);

module.exports = routes;