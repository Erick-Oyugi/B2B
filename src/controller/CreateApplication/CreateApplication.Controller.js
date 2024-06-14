import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()


var options = {
    'method': 'POST',
    'hostname': '8g18q9.api.infobip.com',
    'path': '/provisioning/1/applications',
    'headers': {
        'Authorization': '{authorization}',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    'maxRedirects': 20
};


const INFO_BIP_URL = process.env.CREATE_APPLICATION_INFO_BIP_URL

const CreateApplication = async (req,res) => {

    try {
    await axios({
        method : "POST",
        url : INFO_BIP_URL,
        headers: {
            'Authorization': process.env.AUTHORIZATION_HEADER,
            'Accept': 'application/json'
        },
        data: {
            applicationName: req.body.applicationName,
            applicationId: req.body.applicationId
            
        }
    }).then((response) => {
        console.log(response.data);
        res.status(200).json({"message": "Application Created Successfully"})
      });
    }

catch(err){
        console.log(err)
        res.status(500).send(err)
    }



}
export default CreateApplication 