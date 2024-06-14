import express from 'express'
import InfoBipController from '../controller/info.controller.js'
import SendMessage from '../controller/SendMessage/SendMessage.Controller.js'
import GetMessage from '../controller/GetMessage/GetMessage.Controller.js'
import GetInBoundMessages from '../controller/GetinBoundMessages/Inbound.Controller.js'
import CreateApplication from '../controller/CreateApplication/CreateApplication.Controller.js'
import PreviewMessage from '../controller/PreviewMessage/Preview.Controller.js'
import CreateEntity from '../controller/CreateEntity/CreateEntity.Controller.js'
import GetEnitities from '../controller/GetEntities/GetEntities.Controller.js'
import GetOutBoundMessages from '../controller/GetOutBoundSmsLog/GetOutBound.Controller.js'
import WhitelistNumber from '../controller/WhitelistNumber/WhitelistNumber.Controller.js'
import WebhookReceiver from '../controller/Webhook/Webhook.Controller.js'
import GetDeliveryReports from '../controller/GetDeliveryReports/GetDeliveryReports.Controller.js'
import AmeyoPhoneController from '../controller/AmeyoPhones/AmeyoPhone.Controller.js'
import DebitTransaction from '../controller/SmsDebitTransaction/SmsDebit.Controller.js'



const router = express.Router()


router.post('/infoBip',InfoBipController)
router.post('/infobip/send-sms', SendMessage)
router.post('/get-sms', GetMessage)
router.post('/infobip/get-inbound-sms', GetInBoundMessages)
router.post('/infobip/create-application',CreateApplication)
router.post('/infobip/create-entity', CreateEntity)
router.post('/preview',PreviewMessage)
router.post('/infobip/get-entities', GetEnitities)
router.post('/infobip/outbound-sms', GetOutBoundMessages)
router.post('/infobip/whitelist-number', WhitelistNumber)
router.post('/infobip/webhook-receiver', WebhookReceiver)
router.post('/infobip/get-delivery-status', GetDeliveryReports)
router.post('/infobip/get-account', AmeyoPhoneController)
router.post('/smscharge/v1/debit', DebitTransaction)




export default router
