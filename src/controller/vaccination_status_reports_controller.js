const vaccinationStatusReportsService = require('../service/vaccination_status_report_service');

const vaccinationStatusReportsController = {}

vaccinationStatusReportsController.getAll = async (req, res, next) => {
    try {
        console.log(`Get all reports ...`);
        if (!req.query) {
            return res.send('query url is required');
        }
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

module.exports = vaccinationStatusReportsController;