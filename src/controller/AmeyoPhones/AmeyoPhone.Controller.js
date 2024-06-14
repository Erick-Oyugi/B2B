import GetOutBoundMessages from "../GetOutBoundSmsLog/GetOutBound.Controller.js";
import { v4 as uuidv4 } from 'uuid';
import AmeyoJoiSchema from "../../model/AmeyoPhone/AmeyoPhone.joi.js";
import axios from "axios";


const AmeyoPhoneController = async() => {

    let accountNumber = {}

try {
    const {results} = await GetOutBoundMessages()
    const id = uuidv4();


    for (let i = 0; i < results.length; i++) {
         let toField = results[i].to;

         console.log("Phone Numbers To Charge SMS:",toField)

         const value = await AmeyoJoiSchema.validateAsync({
         account : toField
    })

  await axios({
        url : 'http://konnectapimanager.creditbank.co.ke:3005/ameyo/account_inquiry',
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        data : { account: value.account}
    }).then(response => {

        console.log("=======================================")
        console.log(response.data)

        console.log("---------------------------------------")
        console.log("=======================================")
        
         accountNumber = response.data;

             // Ensure accountNumbers is an array
    //  if (Array.isArray(accountNumbers)) {
    //             for (let j = 0; j < accountNumbers.length; j++) {
    //                 let accountNumber = accountNumbers[j];
    //                 console.log("Account To Debit:", accountNumber);
    //             }
    //         } else {

    //             console.error('accountNumber is not an array:', accountNumbers);
    //         }
     
    })
    .catch((error) => {

        console.error('Error:', error.message);

        // If the error is from axios, log additional details
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }
       
     });
    }

    }catch(err){
        console.log(err)
    }
    
    return accountNumber



}

export default AmeyoPhoneController

