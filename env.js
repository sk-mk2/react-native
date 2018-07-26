
function getIp(){
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    for(k in networkInterfaces) {
        if(k === 'wlp3s0') {
            return networkInterfaces[k][0].address;
        }
    }
}

function createEnvFile(path){
    const fs = require('fs');
    const envData = {
        'ip':getIp(),
        'port':8080
    }
    fs.writeFile(path, JSON.stringify(envData), (err) => {
        if (err) {
            console.err(err);
        }
        console.log(`${path} created`);
    });
}

createEnvFile('./TestProject/env.json');
createEnvFile('./express/env.json');


