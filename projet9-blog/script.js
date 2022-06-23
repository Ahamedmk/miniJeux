console.log("connecté !");
const postsContainer = document.querySelector('.posts');
const posts = [
  {
    titre: "SEO, les bonnes pratiques الرحمان",
    hashtag: "#seo",
    extrait: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do elusmod incididunt.",
  },
  {
    titre: "Bien débuter en référencement payant",
    hashtag: "#référencement",
    extrait: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do elusmod incididunt.",
  },
  {
    titre: "Content Marketing, les bons arguments",
    hashtag: "#contentmarketing",
    extrait: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do elusmod incididunt.",
  },
];
console.log(posts);
posts.forEach(item =>{
  //console.log(item);
  const article = ` 
<div class="post"> 
<div class="post-titre"> ${item.titre}</div>
<div class="post-extrait"> ${item.extrait}</div>
<div class="post-hashtag"> ${item.hashtag}</div>
</div>
`
console.log(article);
 postsContainer.innerHTML += article;
});




