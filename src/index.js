const express = require('express');
const routes = require('./router/vaccination_status_reports_router');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is up on port: ${port} ...`);
});