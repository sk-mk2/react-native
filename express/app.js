const express = require('express');
const app = express();
// log4jsの読み込み
const log4js  = require('log4js');
// ログ出力設定
log4js.configure(__dirname + '/log4js.config.json');  
// ロガーの生成
const logger = log4js.getLogger('system');

app.use(log4js.connectLogger(logger, {level: 'auto'}));
app.use(express.static(__dirname + '/public'));

const {ip, port} = require('./env.json');
const PORT = process.env.port || port;
app.listen(PORT, () => {
    logger.info(`IP: ${ip}`);
    logger.info(`App listening on port ${PORT}`);
    logger.info('Press Ctrl+C to quit');
});

