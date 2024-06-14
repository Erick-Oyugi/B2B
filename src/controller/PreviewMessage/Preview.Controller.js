
import express from 'express'
import axios from 'axios'


var options = {
    'method': 'POST',
    'hostname': '{baseUrl}',
    'path': '/sms/1/preview',
    'headers': {
        'Authorization': '{authorization}',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    'maxRedirects': 20
};


const INFO_BIP_URL = "https://8g18q9.api.infobip.com/sms/1/preview"


const PreviewMessage = async (req, res) => {

    try {

        await axios({
            method : "POST",
            url : INFO_BIP_URL,
            headers: {
                'Authorization': 'App 3c7733c1b6776cabcd0ad61ffd63dfbb-18f2ccfc-9f34-44f2-9a2b-a8abe1269d2b',
                'Accept': 'application/json'
            },
            data : {
                text: "Let's see how many characters remain unused in this message."
            }
         
        }).then((response) => {
            console.log(response.data);
            res.send(response.data)
          });



    }catch(err){

    }


    



}





export default PreviewMessage