const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const {ip, port} = require('./env.json');
const PORT = process.env.port || port;
app.listen(PORT, () => {
    console.log(`IP: ${ip}`);
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit');
});
