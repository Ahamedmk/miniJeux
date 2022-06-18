console.log('connecté !')
const questions = document.querySelectorAll('.question');
console.log(questions);
questions.forEach((item)=>{
    console.log('item');
    item.addEventListener('click', function(){
        console.log('item cliqué');
        const next = item.nextElementSibling;
        console.log(next);
        next.classList.toggle('visible');
        icone = item.lastElementChild;
        console.log(icone);
        icone.classList.toggle('fa-chevron-up');
    })
})