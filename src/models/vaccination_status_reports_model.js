const connection = require('../db/connection');
const { DataTypes } = require('sequelize');

const VaccinationStatusReports = connection.sequelize.define('VaccinationStatusReports',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nip_no: {
            type: DataTypes.INTEGER
        },
        empl_name: {
            type: DataTypes.STRING
        },
        empl_sts: {
            type: DataTypes.STRING
        },
        empl_loc: {
            type: DataTypes.STRING
        },
        pat_empl_cat: {
            type: DataTypes.STRING
        },
        div_name: {
            type: DataTypes.STRING
        },
        div_cd: {
            type: DataTypes.STRING
        },
        hrp_dept_name: {
            type: DataTypes.STRING
        },
        hrp_sect_name: {
            type: DataTypes.STRING
        },
        vaccination_status: {
            type: DataTypes.STRING
        },
        vaccinated_by: {
            type: DataTypes.STRING
        },
        act_vacc_cd: {
            type: DataTypes.STRING
        },
        d1_dt: {
            type: DataTypes.STRING
        },
        d1_vacc_cd: {
            type: DataTypes.STRING
        },
        d2_dt: {
            type: DataTypes.STRING
        },
        d2_vacc_cd: {
            type: DataTypes.STRING
        },
        d3_dt: {
            type: DataTypes.STRING
        },
        d3_vacc_cd: {
            type: DataTypes.STRING
        },
        vacc_dose: {
            type: DataTypes.STRING
        },
        conf_pcr_pos_dt: {
            type: DataTypes.STRING
        },
        pcr_neg1_dt: {
            type: DataTypes.STRING
        },
        pcr_neg2_dt: {
            type: DataTypes.STRING
        },
        d_repl_cat: {
            type: DataTypes.STRING
        },
        d_reply1: {
            type: DataTypes.STRING
        },
        d_reply2: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'vaccination_status_reports',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    }
);

module.exports = VaccinationStatusReports;