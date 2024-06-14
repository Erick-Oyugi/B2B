import axios from "axios"
import dotenv from "dotenv"

const INFO_BIP_URL = 'https://5ljvj.api.infobip.com/sms/1/logs'

const GetDeliveryReports = async (req, res) =>{

    try {
        axios({
            method : "GET",
            url : INFO_BIP_URL,
            headers: {
                'Authorization': 'App 52bb8c30c7d50a544db80fe5763dfaa8-90c8c3ae-bbb2-49a6-88d9-9dea4858f50c',
                'Accept': 'application/json'
            },
        }).then((response) => {
            console.log(response.data);
            res.send(response.data)


            // axios.post('https://e9df-102-221-98-68.ngrok-free.app/infobip/webhook-receiver', response.data)
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });

            

            
        });
        }
    
        catch(err){
    
            console.log(err)
            res.send(err)
        }


}

export default GetDeliveryReports