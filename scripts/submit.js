const inputs = Array.from(document.querySelectorAll('.submit-input'));
const buttons = Array.from(document.querySelectorAll('.submit-button'))

const mailchimpInput = document.querySelector('#mce-EMAIL');
const mailchimpSubmit = document.querySelector('#mc-embedded-subscribe');
const mailchimpForm = document.querySelector('#mc-embedded-subscribe-form');

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
    let email = button.parentElement.parentElement.querySelector(".submit-input").value;

    if(validateEmail(email)){
      button.querySelector('.submit-button__inner').textContent = "Letter Sent!";
      button.setAttribute('sent', '');

      // sendEmail(email);

      mailchimpInput.value = email;
      mailchimpSubmit.click();
    }
  });
})


// const sendEmail = (email) => {
//   axios.post(
//     'https://us18.api.mailchimp.com/3.0/lists/b816d535dd/members/', 
//     {
//       email: email
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST",
//         "Access-Control-Allow-Headers": "X-Requested-With",
//         'Access-Control-Allow-Credentials': true
//       }
//     }
//   ).then(response=> console.log(response))
// }