const inputs = Array.from(document.querySelectorAll('.submit-input'));
const buttons = Array.from(document.querySelectorAll('.submit-button'))

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

inputs.forEach(input => {
  input.addEventListener("input", e => {
    if(input.value.length === 0){
      input.setAttribute("valid", "");
      if(!input.parentElement.querySelector(".submit-button").hasAttribute("sent")){
        input.parentElement.querySelector(".submit-button").disabled = true;
      }
    }
    else if(validateEmail(input.value)){
      input.setAttribute("valid", "true");
      input.parentElement.querySelector(".submit-button").disabled = false;
    }
    else if(!validateEmail(input.value)){
      input.setAttribute("valid", "false");
      if(!input.parentElement.querySelector(".submit-button").hasAttribute("sent")){
        input.parentElement.querySelector(".submit-button").disabled = true;
      }
    }
  });
})

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    if(validateEmail(button.parentElement.parentElement.querySelector(".submit-input").value)){
      button.querySelector('.submit-button__inner').textContent = "Letter Sent!";
      button.setAttribute('sent', '');
    }
  });
})

const mailchimpInstance = "us18";
const listUniqueId = "b816d535dd";
const submitButton = document.querySelector('.intro-get-discount__submit-button');
const input = document.querySelector('.intro-get-discount__input');

const http = new XMLHttpRequest();
const url = 'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/';
const data = {
  email: ""
};

http.open("POST", url);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  data.email = input.value;
  http.send(data);
})



// --------------------------

// sendToMailChimp(email, ) {
//  const client = require("@mailchimp/mailchimp_marketing");

// client.setConfig({
//   apiKey: "YOUR_API_KEY",
//   server: "YOUR_SERVER_PREFIX",
// });

// const run = async () => {
//   const response = await client.lists.addListMember("list_id", {
//     email_address: "Ebony_Brekke@gmail.com",
//     status: "pending",
//   });
//   console.log(response);
// };
// }

