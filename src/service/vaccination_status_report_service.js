const VaccinationStatusReports = require('../models/vaccination_status_reports_model');

const vaccinationStatusReportsService = {}

vaccinationStatusReportsService.getAll = async (orderBy, offset, limit) => {
    console.log(`Get all reports orderBy = ${orderBy} offset = ${offset} limit = ${limit}`);
    const vaccinationStatusReports = await VaccinationStatusReports.findAll({order: [ orderBy ], offset: Number(offset), limit: Number(limit)});
    console.log(`Get all reports success`);
    return vaccinationStatusReports;
}

module.exports = vaccinationStatusReportsService;