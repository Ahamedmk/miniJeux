console.log("connecté");
const voyages = [
  {
    pays: "borabora",
    prix: 1790,
    voyageurs: 4,
  },
  {
    pays: "bahamas",
    prix: 1790,
    voyageurs: 4,
  },
  {
    pays: "comores",
    prix: 1790,
    voyageurs: 4,
  },
  {
    pays: "comores",
    prix: 1290,
    voyageurs: 2,
  },
  {
    pays: "senegal",
    prix: 2200,
    voyageurs: 3,
  },
];
console.log(voyages, "tableau voyages");
// Le formulaire
const form = document.getElementById("form");
// Les champs :input text et input date
const pays = document.getElementById("pays");
const start = document.getElementById("start");
const end = document.getElementById("end");
const listeResultats = document.querySelector('.liste-resultats');

form.addEventListener("submit", function (e) {
  //empecher le rafraichissement de la page
  e.preventDefault();
  //console.log('formulaire validé');
  const choix = {
    pays: pays.value,
    start: start.value,
    end: end.value,
  };
  console.log(choix, "choix");
  const choixString = JSON.stringify(choix);
  console.log(choixString);
  localStorage.setItem("details", choixString);
  window.location.href = window.location.href;
});

function displayDetails() {
  console.log("fonction déclenché");
  //ici recuperation du local storage
  const choixObjet = JSON.parse(localStorage.getItem("details"));
  console.log(choixObjet, "choixObjet");
  pays.value = choixObjet.pays;
  start.value = choixObjet.start;
  end.value = choixObjet.end;
  const resultats = voyages.filter((voyage) => voyage.pays === pays.value);
  console.log(resultats, "resultats");
  resultats.forEach(resultat =>{
    console.log(resultat, "resultat");
    const item = `
    <div class="item">
     <p class="item-pays">
     ${resultat.pays}
     </p>
     <p>
     offre pour ${resultat.voyageurs} personnes
     </p>
     <p>
     prix vol inclus ${resultat.prix}€
     </p>
     <button>GO !</button>
     </div>
     `
     listeResultats.innerHTML += item;
  });
};
displayDetails();

