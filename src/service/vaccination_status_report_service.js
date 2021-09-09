const VaccinationStatusReports = require('../models/vaccination_status_reports_model');
const { Op } = require('sequelize');

const vaccinationStatusReportsService = {}

vaccinationStatusReportsService.add = async (request) => {
    console.log(`Add new report, request = ${JSON.stringify(request)}`);
    const requestValidator = await VaccinationStatusReports.findOne({ where: {nip_no: request.nip_no} });
    if (requestValidator) {
        return console.log(`Add new report failed, nip_no already exists`);
    }
    const vaccinationStatusReports = await VaccinationStatusReports.create({
        nip_no: request.nip_no,
        empl_name: request.empl_name,
        empl_sts: request.empl_sts,
        empl_loc: request.empl_loc,
        div_name: request.div_name,
        hrp_dept_name: request.hrp_dept_name,
        hrp_sect_name: request.hrp_sect_name,
        vaccination_status: request.vaccination_status,
        vaccinated_by: request.vaccinated_by,
        act_vacc_cd: request.act_vacc_cd,
        d1_dt: request.d1_dt,
        d1_vacc_cd: request.d1_vacc_cd,
        d2_dt: request.d2_dt,
        d2_vacc_cd: request.d2_vacc_cd,
        d3_dt: request.d3_dt,
        d3_vacc_cd: request.d3_vacc_cd,
        vacc_dose: request.vacc_dose,
        conf_pcr_pos_dt: request.conf_pcr_pos_dt,
        pcr_neg1_dt: request.pcr_neg1_dt,
        pcr_neg2_dt: request.pcr_neg2_dt,
        d_repl_cat: request.d_repl_cat,
        d_reply1: request.d_reply1,
        d_reply2: request.d_reply2
    });
    console.log(`Add new report success`);
    return vaccinationStatusReports;
}

vaccinationStatusReportsService.update = async (request) => {
    console.log(`Update report, request = ${JSON.stringify(request)}`);
    const vaccinationStatusReports = await VaccinationStatusReports.findOne({ where: {id: request.id} });
    if (!vaccinationStatusReports) {
        return console.log(`Report with this id = ${request.id} not found`);
    }
    const requestValidator = await VaccinationStatusReports.findOne({ where: { [Op.and] : { id: { [Op.ne]: request.id }, nip_no: request.nip_no }}});
    if (requestValidator) {
        return console.log(`Update new report failed, nip_no already exists`);
    }
    vaccinationStatusReports.nip_no = request.nip_no;
    vaccinationStatusReports.empl_name = request.empl_name;
    vaccinationStatusReports.empl_sts = request.empl_sts;
    vaccinationStatusReports.empl_loc = request.empl_loc;
    vaccinationStatusReports.div_name = request.div_name;
    vaccinationStatusReports.hrp_dept_name = request.hrp_dept_name;
    vaccinationStatusReports.hrp_sect_name = request.hrp_sect_name;
    vaccinationStatusReports.vaccination_status = request.vaccination_status;
    vaccinationStatusReports.vaccinated_by = request.vaccinated_by;
    vaccinationStatusReports.act_vacc_cd = request.act_vacc_cd;
    vaccinationStatusReports.d1_dt = request.d1_dt;
    vaccinationStatusReports.d1_vacc_cd = request.d1_vacc_cd;
    vaccinationStatusReports.d2_dt = request.d2_dt;
    vaccinationStatusReports.d2_vacc_cd = request.d2_vacc_cd;
    vaccinationStatusReports.d3_dt = request.d3_dt;
    vaccinationStatusReports.d3_vacc_cd = request.d3_vacc_cd;
    vaccinationStatusReports.vacc_dose = request.vacc_dose;
    vaccinationStatusReports.conf_pcr_pos_dt = request.conf_pcr_pos_dt;
    vaccinationStatusReports.pcr_neg1_dt = request.pcr_neg1_dt;
    vaccinationStatusReports.pcr_neg2_dt = request.pcr_neg2_dt;
    vaccinationStatusReports.d_repl_cat = request.d_repl_cat;
    vaccinationStatusReports.d_reply1 = request.d_reply1;
    vaccinationStatusReports.d_reply2 = request.d_reply2;
    await vaccinationStatusReports.save();
    console.log(`Update report success`);
    return vaccinationStatusReports;
}

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

vaccinationStatusReportsService.delete = async (request) => {
    console.log(`Delete report, request = ${JSON.stringify(request)}`);
    const vaccinationStatusReports = await VaccinationStatusReports.findOne({where: { id: request.id }});
    if (!vaccinationStatusReports) {
        return console.log(`There is no report with this Id = ${request.id}, request failed`);
    }
    await vaccinationStatusReports.destroy();
    console.log(`Delete report success`);
    return vaccinationStatusReportsService;
}

module.exports = vaccinationStatusReportsService;