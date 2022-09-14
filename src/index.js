var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {

    if(req.url ==='/welcome') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write(' Welcome to about us page'); 
        res.end(); 
    }
    else if(req.url ==='/contact') {
        res.writeHead(200 , {"content-text" : "application/json"})
        res.write(JSON.stringify({   phone: '18602100000',   email: 'guestcaredominos@jublfood.com' }))
        res.end(); 
    }
    else{
        res.writeHead(404)
        res.end('error');
    }
    
}

httpServer.listen(8081, ()=> console.log('server is up at 8081')) ;

module.exports = httpServer;