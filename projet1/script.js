console.log('connecté !')
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);
//Div cookies;
const cookies = document.querySelector('.cookies');
console.log(cookies);
const title =document.querySelector('h1');
let valeurCle = localStorage.getItem('banniere');
console.log(valeurCle, "valeur de la cle");

btnSuccess.addEventListener('click', function(){
    console.log('bouton cliqué');
    cookies.style.opacity = "0";
    localStorage.setItem('banniere', 'oui');
});
function check(){
    console.log('declenchée');
    if(valeurCle){
        console.log("stockage existe");
        cookies.remove();
    }else{
        console.log("stockage n'existe pas");
    }
}
check();