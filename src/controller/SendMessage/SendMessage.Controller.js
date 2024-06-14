import https from 'https'
import fs from 'fs'
import axios from 'axios'




const INFO_BIP_URL = "https://8g18q9.api.infobip.com/sms/2/text/advanced"


const SendMessage = async (req, res) => {
    try {
    
    await axios({
            method : "POST",
            url : INFO_BIP_URL,
            headers: {
                'Authorization': process.env.AUTHORIZATION_HEADER,
                'Accept': 'application/json'
            },
            data: {
             "messages": [
                        {
                           "destinations": [{"to":"254714315046"}],
                           "from": "ServiceSMS",
                           "text": "Hello,\n\nThis is a test message from Infobip. Have a nice day!"
                        }
                    ]
                
            }
        }).then((response) => {
            console.log(response.data);
            res.send(response.data)
          });


    

        }
        catch(err){
            console.log(err)
            res.send(err)
        }

}



export default SendMessage