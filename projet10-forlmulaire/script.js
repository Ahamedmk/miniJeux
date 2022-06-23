console.log("connecté !");
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");
const titre = document.getElementById("titre");
const msgError = document.querySelectorAll('.error');


form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("formulaire envoyé");
  const prenomValue = prenom.value.trim();
  console.log(prenomValue,"prenom");
  const nomValue = nom.value.trim();
  console.log(nomValue,"nom");
  const emailValue = email.value.trim();
  console.log(emailValue,"email");
  const messageValue = message.value.trim();
  console.log(messageValue,"message");
  if(prenomValue === ""){
    console.log('erreur');
  }else{
    console.log('succes');
    
  }
  msgError.forEach(error =>{
    error.classList.add('invisible');
  })
  if(prenomValue.length < 2 || prenomValue.length > 10){
    console.log('erreur prenom');
    prenom.nextElementSibling.classList.remove('invisible');
  }else if(nomValue.length < 3 || nomValue.length > 15){
    console.log('erreur nom');  
    nom.nextElementSibling.classList.remove('invisible');
  }else if(messageValue.length < 10 || messageValue.length > 100){
    console.log('erreur message');
    message.nextElementSibling.classList.remove('invisible');
  }else{
    console.log('succes');
    titre.innerText = "Votre message a bien été envoyé !";
    form.remove();

  }
});
