var fs = require('fs');
var staticPath = './photo';
var photoDir = fs.readdirSync(staticPath);
var array = []
for(var photo of photoDir) {
    var obj = {};
	obj.name = photo.split(photo[photo.lastIndexOf('.')])[0];
	obj.path = staticPath+'/'+photo;
    array.push(obj);
}

fs.writeFileSync('config.json', JSON.stringify(array));

