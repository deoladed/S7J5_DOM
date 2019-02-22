// Question 1 :
let p_tag = document.getElementsByTagName('p');
console.log(`Il y a ${p_tag.length} tags p dans le document`);

// Question 2 :
let id_coucou = document.getElementById('coucou')
console.log(`Contenu texte de l'element portant l'ID coucou : ${id_coucou.innerHTML}`);

// Question 3 :
let urlTroisieme = document.getElementsByTagName('a');
console.log(`Url vers laquelle pointe le 3eme element a : ${urlTroisieme[2].href}`);

// Question 4 :
let compteMoi = document.getElementsByClassName('compte-moi');
console.log(`Compte-moi : ${compteMoi.length} tags`);

// Question 5 :
let liTags = document.querySelectorAll('li.compte-moi');
console.log(`Nombre de li ayant pour classe compte-moi : ${liTags.length}`);

// Question 7 :
let liolTags = document.querySelectorAll('ol > li.compte-moi');
console.log(`Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? : ${liolTags.length}`)

// Question 8 :
let theFirstLi = document.querySelectorAll('div > ul')[1].querySelector('li').textContent
console.log(theFirstLi)

