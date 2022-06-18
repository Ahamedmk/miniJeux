console.log('connecté !');
const btn = document.querySelector('.btn');
console.log(btn);
const ctn = document.querySelector('.container-notifications');
console.log(ctn);
btn.addEventListener('click', function(){
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerText = "votre fichier est bien enregistré";
    ctn.appendChild(notification);
    setTimeout(function(){
        notification.remove();
    }, 5000);
    console.log(notification);
console.log('bouton cliqué');

});