
import axios from 'axios'

const GetApplication = async (req,res) => {

    try {
        await axios({
            method : "POST",
            url : INFO_BIP_URL,
            headers: {
                'Authorization': 'App 3c7733c1b6776cabcd0ad61ffd63dfbb-18f2ccfc-9f34-44f2-9a2b-a8abe1269d2b',
                'Accept': 'application/json'
            },
            data: {
                applicationName: "Test name",
                applicationId: "test-application"
                
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

export default GetApplication