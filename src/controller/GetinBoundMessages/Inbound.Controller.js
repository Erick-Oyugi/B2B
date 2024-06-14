import axios from 'axios'

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


const INFO_BIP_URL = 'https://8g18q9.api.infobip.com/sms/1/inbox/reports?limit=1&applicationId=uo-89-90-10&entityId=uu-67-ut-90-50'


const GetInBoundMessages = async (req, res) => {

 try {

    await axios({
        method : "GET",
        url : INFO_BIP_URL,
        headers: {
            'Authorization': 'App 3c7733c1b6776cabcd0ad61ffd63dfbb-18f2ccfc-9f34-44f2-9a2b-a8abe1269d2b',
            'Accept': 'application/json'
        }
    }).then((response) => {
        console.log(response.data);
        res.send(response.data)
      });


 }catch (err){
    console.log(err)
    res.status(404).json(err)

 }

}



export default GetInBoundMessages