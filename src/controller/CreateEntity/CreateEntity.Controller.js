
import axios from 'axios'



var options = {
    'method': 'POST',
    'hostname': '{baseUrl}',
    'path': '/provisioning/1/entities',
    'headers': {
        'Authorization': '{authorization}',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    'maxRedirects': 20
};


const INFO_BIP_URL = process.env.CREATE_ENTITY_INFO_BIP_URL



const CreateEntity = async (req, res) => {


    try {
        await axios({
            method : "POST",
            url : INFO_BIP_URL,
            headers: {
                'Authorization': process.env.AUTHORIZATION_HEADER,
                'Accept': 'application/json'
            },
            data: {
                entityName: req.body.entityName,
                entityId: req.body.entityId
                
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
    







export default CreateEntity