import axios from 'axios'
import dotenv from 'dotenv'





const INFO_BIP_URL = 'https://8g18q9.api.infobip.com/signals/1/trusted-msisdns'

var options = {
    'method': 'GET',
    'hostname': '{baseUrl}',
    'path': '/sms/1/inbox/reports?limit=2&applicationId=marketing-automation-application&entityId=promotional-traffic-entity',
    'headers': {
        'Authorization': '{authorization}',
        'Accept': 'application/json'
    },
    'maxRedirects': 20
};

const WhitelistNumber = async(req,res) => {

    try {
        await axios({
            method : "POST",
            url : INFO_BIP_URL,
            headers: {
                'Authorization': 'App 3c7733c1b6776cabcd0ad61ffd63dfbb-18f2ccfc-9f34-44f2-9a2b-a8abe1269d2b',
                'Accept': 'application/json'
            },
            data : {
                "phoneNumbers": "+254721405211"
            }
        }).then((response) => {
            console.log(response.data);
            res.send(response.data)
          });
        }
    
        catch(err) {
    
            console.log(err)
            res.send(err)
        }



}



export default WhitelistNumber

