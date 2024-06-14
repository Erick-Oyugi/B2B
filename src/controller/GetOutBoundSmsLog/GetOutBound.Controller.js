import axios from "axios"

const INFO_BIP_URL = "https://5ljvj.api.infobip.com/sms/2/logs"

const GetOutBoundMessages = async (req, res) =>{
    let phoneNumber = {}

try {
    await axios({
            method : "GET",
            url : INFO_BIP_URL,
            headers: {
                'Authorization': 'App 52bb8c30c7d50a544db80fe5763dfaa8-90c8c3ae-bbb2-49a6-88d9-9dea4858f50c',
                'Accept': 'application/json'
            }
        }).then(response => {

            phoneNumber = response.data
            console.log(response.data);
            // res.send(response.data)
          })
          .catch((err) => {
            res.status(400).json(err);
            console.log(err)
           });
        }
    
        catch(err){
             console.log(err)
            // res.send(err)
        }

        return phoneNumber


}

export default GetOutBoundMessages