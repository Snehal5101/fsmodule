// var fs = require('fs');
// fs.readFile('textfile.txt','utf8', function(err, data) {
//     if (err)throw err;
//     console.log(data);
// });


var fs = require('fs');
fs.writeFile('textfile.txt',"Hello...This is externally added text",function(err){
    if (err)
    console.log(err);
    else
    console.log('write operation complete.')
})

