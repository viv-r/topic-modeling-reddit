var http = require('http');

http.createServer(function (req, res) {
    fs.readFile("./public/index.html" + request.url,function(error,data){
        if(error){
            response.writeHead(404,{"Content-type":"text/plain"});
            response.end("Sorry the page was not found");
        }else{
            response.writeHead(202,{"Content-type":"text/html"});
            response.end(data);
        }
    }); 
}).listen(process.env.PORT || 8080);