var https = require('https')
var fs = require('fs')

const securityCerts = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'passphrase'

};

https.createServer( securityCerts , ( req , res )=>{
    console.log(req.url);
    res.end( 'lalalalal' );
    console.log("server created ");
}).listen(3000);
console.log("server listening at 3000 ");