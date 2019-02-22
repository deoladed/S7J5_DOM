// Modification n°1

function changeTitles() {
let firstTitle = document.getElementsByTagName('h1')[0].innerHTML = "Ce que j'ai appris à THP";
let subTitle = document.getElementsByTagName('p')[1].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles()


// Modification n°2

function changeCallToActions() {
let buttonCall = document.getElementsByTagName('a')[4];
buttonCall.innerHTML = "OK je veux tester !";
buttonCall.href = "http://www.thehackingproject.org";

let buttonSecondCall = document.getElementsByTagName('a')[5];
buttonSecondCall.innerHTML = "Non Merci";
buttonSecondCall.href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions()

// Modification n°3

function changeLogoName() {
let logo = document.getElementsByTagName('strong')[0].innerHTML = 'The THP Experience';
}
changeLogoName()

// Modification n°4

function populateImages() {
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

	let imagesCards = document.getElementsByClassName('card-img-top');
	for(let i = 0; i < imagesCards.length; i++) {
		imagesCards[i].src = imagesArray[i]
	}
}
populateImages()

// Modification n°5

function deleteLastCards() {
	let lastCards = document.querySelectorAll('.card');

	for(let i = 6; i < lastCards.length; i++) {
		lastCards[i].parentNode.removeChild(lastCards[i]);
	}
}
deleteLastCards()


// Modification n°6

function changeCardsText() {
	let cards = document.querySelectorAll('.card');
	let newContent = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]

	for(let i = 0; i < 3; i++) {
		cards[i].querySelector('p').textContent = newContent[i];
	}
}
changeCardsText()



// Modification n°7

function changeViewButtons() {
	let cards = document.querySelectorAll('.card')
	for(let i = 0; i < cards.length; i++) {
		cards[i].querySelector('button').classList.add('btn-success');
		cards[i].querySelector('button').classList.remove('btn-outline-secondary');
	}
}
changeViewButtons()

// Modification n°8

function pyramide() {
let jsCard = document.querySelectorAll('.card')[2].parentNode;

let newDiv = document.createElement('div');
newDiv.className = 'row';
newDiv.appendChild(jsCard)

let addIT = document.getElementsByClassName('row')[1].parentNode.appendChild(newDiv)
}
pyramide();
