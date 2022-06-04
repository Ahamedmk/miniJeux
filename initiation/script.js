console.log('connecté !');
document.getElementById('titre').style.color = "blue"; 
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
let titre = document.getElementById('titre');
console.log(btnBlue);

function add(){
    compteur += 2;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = compteur;
} 

setTimeout(function(){
    console.log('fin du chrono')
    btnRed.remove();
    btnBlue.remove();
}, 10000);


let compteur = 0;
console.log(compteur, "compteur au démarrage");
// console.log(btnRed, "bouton rouge");
btnRed.addEventListener('click', function(){
    console.log('cliqué');
    add();
});

btnBlue.addEventListener('click', function(){
    console.log('cercle bleu cliqué');
   add();

});