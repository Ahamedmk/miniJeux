console.log('connecté !')
const icone = document.querySelector('i');
console.log(icone);
const btnButton = document.querySelector('.btn');
console.log(btnButton);
icone.addEventListener('click', function(){
    console.log('icone cliqué');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
})
btnButton.addEventListener('click', function(){
    console.log('yes');
    btnButton.classList.toggle('abonne');
     if(btnButton.innerText === "abonné"){
         btnButton.innerText = "abonnez vous";
     }else{
        btnButton.innerText = "abonné";
    };
   
    
});