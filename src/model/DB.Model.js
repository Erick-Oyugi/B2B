
import mongoose, { Mongoose } from "mongoose";

const SmsSchema = new mongoose.Schema({

    results: {
        type: Object,

         messageId: {
            type: String,
            required:true
         },
         
         from : {
            type: String,
            required:true
         },

         to:{
            type: String,
            required:true
         },
         
         sentAt : {
            type: String,
            required:true
         },
         
         doneAt : {
            type: String,
            required:true
         },

         smsCount: {
            type: String,
            required:true
         },

         recievedAt: {
            type: String,
            required:true
         },

         smsCount : {
            type: Number,
            required:true
         },
         mccMnc : {
            type: String,
            required:true
         },

         price: {
            type: Object,
            
            pricePerMessage: {
                type: String,
                required:true
            },
            currency: {
                type: String,
                required:true
            }
         },

         status :{
            type: String,
    
            groupId : {
                type: Number,
                required:true
             },

             groupName : {
                type: String,
                required:true
             },

             id : {
                type: Number,
                required:true
             },

             name :{
                type: String,
                required: true
             },

             description :{
                type: String,
                required: true
             },

         },

         error : {
            type: Object,

            groupId : {
                type: Number,
                required : true
            } ,

            groupName : {
                type: String,
                required : true
            } ,

            id : {
                type: String,
                required : true
            } ,

            name : {
                type: String,
                required : true
            },

            description : {
                type: String,
                required : true
            },

            permanent : {
                type: String,
                required : true
            } ,


         }

    }

})

const smsModel = mongoose.model('SendSMS', SmsSchema)


export default smsModel

