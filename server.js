const http = require('http');

let port = process.env.PORT;
if(port == null || port == ""){
  port = 8080;
}

http.createServer((request, response) => {
  response.write('<!DOCTYPE html><html>'+'<h1>Hello World!</h1>');
  let body = [];
  let {method, url} = request;
  let {headers} = request;
  let userAgent = headers['user-agent'];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.write('<p>METHOD:   '+method+'<br>'+
                    'URL:   '+url+'<br>'+
                    'USERAGENT:    '+ userAgent +'</p>'+'<br>'+body);
    response.end('</html>');
  });
}).listen(port);