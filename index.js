const express = require('express');
const cors = require('cors')

const routes = require('./src/router/vaccination_status_reports_router');

const app = express();
const port = process.env.PORT;

app.use(cors({origin: ['*']}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, PATCH, DELETE');
    next();
});

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is up on port: ${port} ...`);
});