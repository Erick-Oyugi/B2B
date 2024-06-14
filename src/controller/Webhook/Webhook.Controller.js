
import smsModel from "../../model/DB.Model.js";

const WebhookRecieverController = async (req,res) => {

    const smsModelData = new smsModel({

        results : req.body.results,
        // messageCount : req.body.messageCount,
        // pendingMessageCount: req.body.pendingMessageCount

    }) 

    try {
        const NewsmsModelData = await smsModelData.save() //save to database
        res.status(201).json(NewsmsModelData);

        console.log(NewsmsModelData);

      } 
      catch (err) {
        res.status(400).json({ message: err.message })
      }



}

export default WebhookRecieverController


