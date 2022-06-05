console.log('connecté !')
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);
//Div cookies;
const cookies = document.querySelector('.cookies');
console.log(cookies);
const title =document.querySelector('h1');

btnSuccess.addEventListener('click', function(){
    console.log('bouton cliqué');
    cookies.style.opacity = "0";
});