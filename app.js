const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(cors());

const api = "c592a7ee14ddd047de715e0fd6844b63";
const server = "us18";
const listUniqueId = "b816d535dd";

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: api,
  server: server,
});

const run = async () => {
  const response = await client.lists.addListMember(listUniqueId, {
    email_address: "test123412@gmail.com",
    status: "subscribed",
  });
  console.log(response);
};
// run();
// app.get('/', (req, res) => {

  
// })

app.post('/', urlencodedParser,(req, res) => {
  
  // if(!req.body) return res.sendStatus(400);
  console.log("hello");
  // run();
})