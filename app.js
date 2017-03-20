const app = require('express');
const morgan  = require('morgan');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

server.listen(port, ip, function () {
    console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);