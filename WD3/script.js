const email = document.getElementById("email");
const confirm = document.getElementById("confirm");
const number = document.getElementById("number");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

const errors = document.getElementsByClassName("error");

const video = document.getElementById("video");

document.getElementById("help").addEventListener("mouseover", function() {
  video.style.display="block";
  video.play();
});

document.getElementById("help").addEventListener("mouseleave", function() {
  video.style.display="none";
  video.pause();
});

function check_element(element) {

  switch(element.id){
    case "confirm":
      if (confirm.value == "") {
        errors[1].style.display = "block";
        errors[1].innerHTML = "This field cannot be empty";
        enable_submit()
        return;
      }
      if (email.value !== confirm.value) {
        confirm.setCustomValidity("Does not match");
        errors[1].style.display = "block";
        errors[1].innerHTML = "Email address does not match";
        enable_submit()
        return;
      }
      confirm.setCustomValidity("");
      errors[1].style.display="none";
      break;

    case "email": 
      if (!element.checkValidity()) {
        errors[0].style.display="block";
        errors[0].innerHTML="Invalid email address entered";
        enable_submit()
        return;
      }
      errors[0].style.display="none";
      break;

    case "number":
      if (!element.checkValidity()) {
        errors[2].style.display="block";
        errors[2].innerHTML="Invalid phone number";
        enable_submit()
        return;
      }
      errors[2].style.display="none";
      break;

    case "message":
      if (element.value == "") {
        errors[3].style.display="block";
        errors[3].innerHTML="This cannot be empty";
        enable_submit()
        return;
      }
      errors[3].style.display="none";
  }
  enable_submit()
}

function enable_submit(){
  if (email.checkValidity() && confirm.checkValidity() && number.checkValidity() && message.checkValidity())
  {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }

}