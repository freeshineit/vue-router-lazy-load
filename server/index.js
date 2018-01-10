const express = require('express')
const app = express()

app.use('/static', express.static(__dirname+'/dist/static'));

app.get('/', function (req, res) {
    res.send();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
