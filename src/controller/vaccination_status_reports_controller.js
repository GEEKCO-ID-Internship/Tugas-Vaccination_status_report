const vaccinationStatusReportsService = require('../service/vaccination_status_report_service');

const vaccinationStatusReportsController = {}

vaccinationStatusReportsController.getAll = async (req, res, next) => {
    try {
        console.log(`Get all reports ...`);
        if (!req.query.order_by || !req.query.offset || !req.query.limit) {
            return res.send('order_by, offset, limit is required');
        }
        const result = await vaccinationStatusReportsService.getAll(req.query.order_by, req.query.offset, req.query.limit);
        return res.send(result);
    } catch (e) {
        console.log(`Get all reports failed, error = ${e}`);
        res.status(500).send(e);
    }
}

vaccinationStatusReportsController.getById = async (req, res, next) => {
    try {
        console.log(`Get reports by Id ...`);
        const reportId = req.params.id;
        if (!reportId) {
            return res.send('id is required');
        }
        const result = await vaccinationStatusReportsService.getById(reportId);
        return res.send(result);
    } catch (e) {
        console.log(`Get reports by Id failed, error = ${e}`);
        res.status(500).send(e);
    }
}

vaccinationStatusReportsController.getByNIP = async (req, res, next) => {
    try {
        console.log(`Get reports by nip_no ...`);
        const noNIP = req.params.nip_no;
        if (!noNIP) {
            return res.send('nip_no is required');
        }
        const result = await vaccinationStatusReportsService.getByNIP(noNIP);
        return res.send(result);
    } catch (e) {
        console.log(`Get reports by nip_no failed, error = ${e}`);
        res.status(500).send(e);
    }
}

module.exports = vaccinationStatusReportsController;