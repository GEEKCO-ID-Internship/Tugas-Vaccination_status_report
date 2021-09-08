const VaccinationStatusReports = require('../models/vaccination_status_reports_model');

const vaccinationStatusReportsService = {}

vaccinationStatusReportsService.getAll = async (orderBy, offset, limit) => {
    console.log(`Get all reports orderBy = ${orderBy} offset = ${offset} limit = ${limit}`);
    const vaccinationStatusReports = await VaccinationStatusReports.findAll({order: [ orderBy ], offset: Number(offset), limit: Number(limit)});
    console.log(`Get all reports success`);
    return vaccinationStatusReports;
}

vaccinationStatusReportsService.getById = async (reportId) => {
    console.log(`Get report by Id = ${reportId}`);
    const vaccinationStatusReports = await VaccinationStatusReports.findOne({where: { id: reportId }});
    if (!vaccinationStatusReports) {
        return console.log(`There is no report with this Id = ${reportId}, request failed`);
    }
    console.log(`Get report by Id success`);
    return vaccinationStatusReports;
}

vaccinationStatusReportsService.getByNIP = async (noNIP) => {
    console.log(`Get report by nip_no = ${noNIP}`);
    const vaccinationStatusReports = await VaccinationStatusReports.findOne({where: { nip_no: noNIP }});
    if (!vaccinationStatusReports) {
        return console.log(`There is no report with this nip_no = ${noNIP}, request failed`);
    }
    console.log(`Get report by Id success`);
    return vaccinationStatusReports;
}

module.exports = vaccinationStatusReportsService;