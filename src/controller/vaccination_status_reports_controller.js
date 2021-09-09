const vaccinationStatusReportsService = require('../service/vaccination_status_report_service');
const vaccinationStatusReportsValidator = require('../validator/vaccination_status_report_validator');

const vaccinationStatusReportsController = {}

vaccinationStatusReportsController.add = async (req, res, next) => {
    try {
        console.log(`Add new reports request ...`);
        const data = req.body;
        const validationResult = await vaccinationStatusReportsValidator.add.validate(data);
        if (validationResult.error) {
            return res.send(validationResult.error.message);
        }
        const value = validationResult.value;
        const result = await vaccinationStatusReportsService.add(value);
        return res.status(201).send(result);
    } catch (e) {
        console.log(`Add new reports failed, error = ${e}`);
        return res.status(500).send(e);
    }
}

vaccinationStatusReportsController.update = async (req, res, next) => {
    try {
        console.log(`Update report request ...`);
        const data = req.body;
        const validationResult = await vaccinationStatusReportsValidator.update.validate(data);
        if (validationResult.error) {
            return res.send(validationResult.error.message);
        }
        const value = validationResult.value;
        const result = await vaccinationStatusReportsService.update(value);
        return res.status(200).send(result);
    } catch (e) {
        console.log(`Update report failed, error = ${e}`);
        return res.status(500).send(e);
    }
}

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
        return res.status(500).send(e);
    }
}

vaccinationStatusReportsController.getById = async (req, res, next) => {
    try {
        console.log(`Get report by Id ...`);
        const reportId = req.params.id;
        if (!reportId) {
            return res.send('id is required');
        }
        const result = await vaccinationStatusReportsService.getById(reportId);
        return res.send(result);
    } catch (e) {
        console.log(`Get report by Id failed, error = ${e}`);
        return res.status(500).send(e);
    }
}

vaccinationStatusReportsController.getByNIP = async (req, res, next) => {
    try {
        console.log(`Get report by nip_no ...`);
        const noNIP = req.params.nip_no;
        if (!noNIP) {
            return res.send('nip_no is required');
        }
        const result = await vaccinationStatusReportsService.getByNIP(noNIP);
        return res.send(result);
    } catch (e) {
        console.log(`Get report by nip_no failed, error = ${e}`);
        return res.status(500).send(e);
    }
}

vaccinationStatusReportsController.delete = async (req, res, next) => {
    try {
        console.log(`Delete report request ...`);
        const data = req.body;
        const validationResult = await vaccinationStatusReportsValidator.delete.validate(data);
        if (validationResult.error) {
            return res.send(validationResult.error.message);
        }
        const value = validationResult.value;
        const result = await vaccinationStatusReportsService.delete(value);
        return res.status(200).send(result);
    } catch (e) {
        console.log(`Delete report failed, error = ${e}`);
        return res.status(500).send(e);
    }
}

module.exports = vaccinationStatusReportsController;