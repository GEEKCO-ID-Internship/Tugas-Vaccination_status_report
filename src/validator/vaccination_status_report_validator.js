const Joi = require('joi');
const VACCINATION_STATUS = require('../constant/vaccination_status_constant');

const vaccinationStatusReportsValidator = {}

const nip_no = Joi.number().required().messages({
    "number.base": `nip_no must be a number`,
    "number.empty": `nip_no cannot be an empty`,
    "any.required": `nip_no is required`
});

const empl_name = Joi.string().required().messages({
    "string.base": `empl_name must be a string`,
    "string.empty": `empl_name cannot be an empty`,
    "any.required": `empl_name is required`
});

const empl_sts = Joi.string().required().messages({
    "string.base": `empl_sts must be a string`,
    "string.empty": `empl_sts cannot be an empty`,
    "any.required": `empl_sts is required`
});

const empl_loc = Joi.string().required().messages({
    "string.base": `empl_loc must be a string`,
    "string.empty": `empl_loc cannot be an empty`,
    "any.required": `empl_loc is required`
});

const div_name = Joi.string().allow(null).required().messages({
    "string.base": `div_name must be a string`,
    "string.empty": `div_name cannot be an empty`,
    "any.required": `div_name is required`
});

const hrp_dept_name = Joi.string().allow(null).required().messages({
    "string.base": `hrp_dept_name must be a string`,
    "string.empty": `hrp_dept_name cannot be an empty`,
    "any.required": `hrp_dept_name is required`
});

const hrp_sect_name = Joi.string().allow(null).required().messages({
    "string.base": `hrp_sect_name must be a string`,
    "string.empty": `hrp_sect_name cannot be an empty`,
    "any.required": `hrp_sect_name is required`
});

const vaccination_status = Joi.string().valid(...Object.keys(VACCINATION_STATUS)).required().messages({
    "any.only": `vaccination_status input must be Y or N`,
    "string.empty": `vaccination_status cannot be an empty`,
    "any.required": `vaccination_status is required`
});

const vaccinated_by = Joi.string().allow(null).required().messages({
    "string.base": `vaccinated_by must be a string`,
    "string.empty": `vaccinated_by cannot be an empty`,
    "any.required": `vaccinated_by is required`
});

const act_vacc_cd = Joi.string().allow(null).required().messages({
    "string.base": `act_vacc_cd must be a string`,
    "string.empty": `act_vacc_cd cannot be an empty`,
    "any.required": `act_vacc_cd is required`
});

const d1_dt = Joi.string().allow(null).required().messages({
    "string.base": `d1_dt must be a string`,
    "string.empty": `d1_dt cannot be an empty`,
    "any.required": `d1_dt is required`
});

const d1_vacc_cd = Joi.string().allow(null).required().messages({
    "string.base": `d1_vacc_cd must be a string`,
    "string.empty": `d1_vacc_cd cannot be an empty`,
    "any.required": `d1_vacc_cd is required`
});

const d2_dt = Joi.string().allow(null).required().messages({
    "string.base": `d2_dt must be a string`,
    "string.empty": `d2_dt cannot be an empty`,
    "any.required": `d2_dt is required`
});

const d2_vacc_cd = Joi.string().allow(null).required().messages({
    "string.base": `d2_vacc_cd must be a string`,
    "string.empty": `d2_vacc_cd cannot be an empty`,
    "any.required": `d2_vacc_cd is required`
});

const d3_dt = Joi.string().allow(null).required().messages({
    "string.base": `d3_dt must be a string`,
    "string.empty": `d3_dt cannot be an empty`,
    "any.required": `d3_dt is required`
});

const d3_vacc_cd = Joi.string().allow(null).required().messages({
    "string.base": `d3_vacc_cd must be a string`,
    "string.empty": `d3_vacc_cd cannot be an empty`,
    "any.required": `d3_vacc_cd is required`
});

const vacc_dose = Joi.string().allow(null).required().messages({
    "string.base": `vacc_dose must be a string`,
    "string.empty": `vacc_dose cannot be an empty`,
    "any.required": `vacc_dose is required`
});

const conf_pcr_pos_dt = Joi.string().allow(null).required().messages({
    "string.base": `conf_pcr_pos_dt must be a string`,
    "string.empty": `conf_pcr_pos_dt cannot be an empty`,
    "any.required": `conf_pcr_pos_dt is required`
});

const pcr_neg1_dt = Joi.string().allow(null).required().messages({
    "string.base": `pcr_neg1_dt must be a string`,
    "string.empty": `pcr_neg1_dt cannot be an empty`,
    "any.required": `pcr_neg1_dt is required`
});

const pcr_neg2_dt = Joi.string().allow(null).required().messages({
    "string.base": `pcr_neg2_dt must be a string`,
    "string.empty": `pcr_neg2_dt cannot be an empty`,
    "any.required": `pcr_neg2_dt is required`
});

const d_repl_cat = Joi.string().allow(null).required().messages({
    "string.base": `d_repl_cat must be a string`,
    "string.empty": `d_repl_cat cannot be an empty`,
    "any.required": `d_repl_cat is required`
});


const d_reply1 = Joi.string().allow(null).required().messages({
    "string.base": `d_reply1 must be a string`,
    "string.empty": `d_reply1 cannot be an empty`,
    "any.required": `d_reply1 is required`
});

const d_reply2 = Joi.string().allow(null).required().messages({
    "string.base": `d_reply2 must be a string`,
    "string.empty": `d_reply2 cannot be an empty`,
    "any.required": `d_reply2 is required`
});

const id = Joi.number().required().messages({
    "number.base": `id must be a number`,
    "number.empty": `id cannot be an empty`,
    "any.required": `id is required`
});

vaccinationStatusReportsValidator.add = Joi.object().keys({
    nip_no,
    empl_name,
    empl_sts,
    empl_loc,
    div_name,
    hrp_dept_name,
    hrp_sect_name,
    vaccination_status,
    vaccinated_by,
    act_vacc_cd,
    d1_dt,
    d1_vacc_cd,
    d2_dt,
    d2_vacc_cd,
    d3_dt,
    d3_vacc_cd,
    vacc_dose,
    conf_pcr_pos_dt,
    pcr_neg1_dt,
    pcr_neg2_dt,
    d_repl_cat,
    d_reply1,
    d_reply2
});

vaccinationStatusReportsValidator.update = Joi.object().keys({
    id,
    nip_no,
    empl_name,
    empl_sts,
    empl_loc,
    div_name,
    hrp_dept_name,
    hrp_sect_name,
    vaccination_status,
    vaccinated_by,
    act_vacc_cd,
    d1_dt,
    d1_vacc_cd,
    d2_dt,
    d2_vacc_cd,
    d3_dt,
    d3_vacc_cd,
    vacc_dose,
    conf_pcr_pos_dt,
    pcr_neg1_dt,
    pcr_neg2_dt,
    d_repl_cat,
    d_reply1,
    d_reply2
});

vaccinationStatusReportsValidator.delete = Joi.object().keys({
    id
});

module.exports = vaccinationStatusReportsValidator