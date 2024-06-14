
import AmeyoPhoneController from "../AmeyoPhones/AmeyoPhone.Controller.js";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import UpdatedInternalTransferValidation from "../../model/InternalFT/InternalFT.joi.js";




const DebitTransaction = async (req, res) => {

    console.log("Here to debit account")


    try {

    const { accountNumber } = await AmeyoPhoneController();
    const url = process.env.TRANSFER_ENDPOINT


    console.log("Here Are The Accounts To Debit",accountNumber)

    for (let i = 0; i < accountNumber.length; i++) {
        let accountField = accountNumber[i];


        console.log(accountField);

    // const value = await UpdatedInternalTransferValidation.validateAsync({
    //     amount: 5,
    //     paymentNarrative: "SMS Charges nominal fee for each SMS notification",
    //     accountFrom : "0021024000039",
    //     accountTo: "0021024000038",
    //     endToEndRef: "AK5ESHWQQQEQ"

    // })

    const value = {
        "amount": 1,
        "paymentNarrative": "Debitting SMS Charges",
        "accountTo": "0021024000038",
        "accountFrom": accountNumber,
        "endToEndRef": "AK5ESHWQQQEQ"
       }


    console.log("--------Debit Details Request-------------")
    console.log(value)
    console.log("------------------------------------------")


 await axios({
        url : url,
        method: 'POST',
        headers : {
            "Content-Type": "application/json",
            "x-app-id":"19010379-e2aa-4d52-a654-c7002a317f94",
            "x-api-key": "cbapi_sandbox_0b15e80a0a3949b8b317b568120b93c5"
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        data : JSON.stringify(value)
    }).then(response => {
        console.log(response.data)
        res.status(200).send(response.data)
    })
    .catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Request data:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
          }
     });
 }

    } catch(err) {

    }

}


export default DebitTransaction