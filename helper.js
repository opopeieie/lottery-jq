const fs = require('fs');
const array = [];

function makeJson(path) {
    const fileDir = fs.statSync(path);
    if(fileDir.isDirectory()) {
        const dir = fs.readdirSync(path);
        for(const i of dir) {
            makeJson(path+'/'+i);
        }
    }else {
        const obj = {};
        const allName = path.split(path[path.lastIndexOf('.')])[0];
        const realName = allName.split(allName[allName.lastIndexOf('/')]);
        obj.name = realName[realName.length - 1];
        obj.path = path;
        array.push(obj);
    }
}

makeJson('年会抽奖');

fs.writeFileSync('config.json', JSON.stringify(array));