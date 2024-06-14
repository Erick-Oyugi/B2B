
// import  https  from "follow-redirects"
import https from 'https'
import fs from 'fs'
import axios from 'axios'


var options = {
    'method': 'GET',
    'hostname': '8g18q9.api.infobip.com',
    'path': '/sms/1/text/query?username=%257Busername%257D&password=%257Bpassword%257D&from=InfoSMS&to=41793026727%2C41793026834&text=Message%20text&flash=true&transliteration=TURKISH&languageCode=TR&intermediateReport=true&notifyUrl=https%3A%2F%2Fwww.example.com&notifyContentType=application%2Fjson&callbackData=callbackData&validityPeriod=720&track=URL&trackingType=Custom%20tracking%20type',
    'headers': {
        'Accept': 'application/json'
    },
    'maxRedirects': 20
};


const INFO_BIP_URL = 'https://8g18q9.api.infobip.com/sms/1/inbox/reports/sms/1/inbox/reports?limit=2&applicationId=marketing-automation-application&entityId=promotional-traffic-entity'


const GetMessage = async (req , res) => {


    //   try {

    // await axios({
    //         method : "GET",
    //         url : INFO_BIP_URL,
    //         headers: {
    //             'Authorization': '3c7733c1b6776cabcd0ad61ffd63dfbb-18f2ccfc-9f34-44f2-9a2b-a8abe1269d2b',
    //             'Accept': 'application/json'
    //         },
    //         maxRedirects: 20
    //     }).then((response) => {
    //         console.log(response.data);
    //       });


    //       res.send(response.data)




        
    //   }
    //   catch(err){
    //        console.log(err)
    //        res.send("Invalid")
    //   }

     req = https.request(options, function (res) {
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

    req.end()
  

}




export default GetMessage