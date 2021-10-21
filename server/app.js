const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`); 
});