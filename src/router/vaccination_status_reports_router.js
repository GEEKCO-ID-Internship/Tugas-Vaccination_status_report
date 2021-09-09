const express = require('express');
const vaccinationStatusReportsController = require('../controller/vaccination_status_reports_controller');

const routes = express();

routes.post('/vaccination_status_reports', vaccinationStatusReportsController.add);
routes.put('/vaccination_status_reports', vaccinationStatusReportsController.update);
routes.get('/vaccination_status_reports', vaccinationStatusReportsController.getAll);
routes.get('/vaccination_status_reports/:id', vaccinationStatusReportsController.getById);
routes.get('/vaccination_status_reports/nip_no/:nip_no', vaccinationStatusReportsController.getByNIP);
routes.delete('/vaccination_status_reports', vaccinationStatusReportsController.delete);

module.exports = routes;