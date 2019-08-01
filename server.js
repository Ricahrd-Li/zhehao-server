var http = require('http');

let port = process.env.PORT;
if(port == null || port == ""){
  port = 8080;
}

//create a server object:
http.createServer(function (req, res) {
  res.write('<h1>Hello World!</h1>'); //write a response to the client
  res.end(); //end the response
}).listen(port); //the server object listens on port 8080