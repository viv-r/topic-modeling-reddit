var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile("public/index.html" , function(err, data) {
        if(err){
            res.writeHead(404,{"Content-type":"text/plain"});
            res.end("Sorry the page was not found");
        }else{
            res.writeHead(202,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        }
    });    
}).listen(process.env.PORT || 8080);