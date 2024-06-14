import app from './src/app.js'
import dotenv from 'dotenv'
import connectDB from './src/config/DB.Contoller.js'
import fs from 'fs'
import https from 'https'



dotenv.config()
connectDB()


let port = process.env.PORT

const path_to_key = process.env.KEY_PATH
const path_to_cert = process.env.CERT_PATH



function bootstrap(){
   const environment = process.env.NODE_ENV;
   var httpsOptions= {
   key: fs.readFileSync(`${path_to_key}`),
   cert: fs.readFileSync(`${path_to_cert}`),
};


var server = https.createServer(httpsOptions, app).listen(port, ()=>{
   console.log(`Info services running on  port ${port}`)
})


}

bootstrap()



