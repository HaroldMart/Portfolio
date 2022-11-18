//Form for send a message to my email
const SUBMIT = document.getElementById("fcf-button");

SUBMIT.addEventListener("click", function (e) {
  e.preventDefault();

  const NAME = document.getElementById("Name").value;
  const EMAIL = document.getElementById("Email").value;
  const MESSAGE = document.getElementById("Message").value;

  window.location.href=`mailto:HaroldM09@outlook.com?subject=envioDesdeFormulario&body=Name%3A%20${NAME}%0AEmail%3A%20${EMAIL}%0AMessage%3A%20${MESSAGE}`;
});



//Init for the AOS library (animation)
AOS.init({
  duration: 1300
});