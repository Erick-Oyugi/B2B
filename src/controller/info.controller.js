

const InfoBipController = async (req,res) => {

    var https = require('follow-redirects').https;
    var fs = require('fs');
    
    var options = {
        'method': 'POST',
        'hostname': '8g18q9.api.infobip.com',
        'path': '/sms/2/text/advanced',
        'headers': {
            'Authorization': 'App 3c7733c1b6776cabcd0ad61ffd63dfbb-18f2ccfc-9f34-44f2-9a2b-a8abe1269d2b',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        'maxRedirects': 20
    };
    
    var req = https.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    
        res.on("error", function (error) {
            console.error(error);
        });
    });
    
    var postData = JSON.stringify({
        "messages": [
            {
                "destinations": [{"to":"254714315046"}],
                "from": "ServiceSMS",
                "text": "Hello,\n\nThis is a test message from Infobip. Have a nice day!"
            }
        ]
    });
    
    req.write(postData);
    
    req.end();

}


export default InfoBipController