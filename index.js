const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
    origin: '*'
};

const port = process.env.PORT || 3001;

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/main.html'));
});

require('./app/routes/graphs')(app);

app.listen(port, () => {
    console.log(`Express web app available at localhost: ${port}`);
});