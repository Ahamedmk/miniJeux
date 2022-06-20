console.log('connecté !')
const vignettes = document.querySelectorAll('.small');
console.log(vignettes);
const fullImg = document.getElementById('full');
console.log(fullImg);
const btn = document.querySelector('.btn-add');
const panierContainer = document.querySelector('.panier-container');
let panier = 0;

vignettes.forEach((item)=>{
    console.log('ce message apparait pourchaque item du tableau')
    item.addEventListener('click',function(){
        // console.log('vignette cliqué');
        let imgSource = item.getAttribute('src');
        console.log(imgSource);
        fullImg.setAttribute('src',imgSource);
    } )
})

btn.addEventListener('click', function(){
    console.log('bouton cliqué');
    panier = panier + 1;
    console.log(panier);
    if(panier < 2){
        panierContainer.innerText = "vous avez" + " " + panier + " " + "produit dans votre panier";
    }else{
        panierContainer.innerText = "vous avez" + " " + panier + " " + "produits dans votre panier";
    }
    
})