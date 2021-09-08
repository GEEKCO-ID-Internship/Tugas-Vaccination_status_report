const { Sequelize } = require('sequelize');

const testConnection = ( async () => {
    const sequelize = new Sequelize('vaccination_reports', 'postgres', 'db1post@A', {
        host: '127.0.0.1',
        dialect: 'postgres'
    });
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

testConnection();