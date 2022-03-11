import {config} from "dotenv";
config();
import express from "express";
import {buildRoutes} from "./routes";
import cors from 'cors';
import https from 'https'
import fs from 'fs'

const app = express();
app.use(express.json());
app.use(cors());
buildRoutes(app);
const port = process.env.PORT || 3000;

if(process.env.ENABLE_HTTPS === "true"){
    console.log("Going for HTTPS")
    https
      .createServer(
        {
          cert: fs.readFileSync(
            "/etc/letsencrypt/live/solgifsapi.eplp.fr/fullchain.pem"
          ),
          key: fs.readFileSync(
            "/etc/letsencrypt/live/solgifsapi.eplp.fr/privkey.pem"
          ),
        },
        app
      )
      .listen(port, function () {
        console.log(`Listening on ${port}...`);
      });
}else{
    console.log("Going for HTTP");
    app.listen(port, function() {
        console.log(`Listening on ${port}...`);
    })
}