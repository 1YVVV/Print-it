const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*__________-DECLARATION ET INITALISATION DES VARIABLES-__________*/
// Récupération des flèches du diaporama en ciblant leurs sélecteurs css respectifs
const fleche_gauche = document.querySelector("#banner .arrow_left");
const fleche_droite = document.querySelector("#banner .arrow_right");
// Récupération de l'image actuellement affichée
const image_affichee = document.querySelector("#banner .banner-img");
// Récupération du texte associé à l'image
const texte_affiche = document.querySelector("#banner p");
// Récupération du conteneur des points du diaporama
const conteneur_points = document.querySelector("#banner .dots");
// Récupération de nombre de diapos en comptant le nombre d'occurrences du tableau slides
const nombre_diapos = slides.length;
// Initialisation d'un compteur
let compteur = 0;

/*__________-CREATION ET AJOUT DES POINTS DANS LE HTML EN FONCTION DU NOMBRE DE DIAPOS-__________*/
// Pour chaque diapo du tableau slides
slides.forEach((diapo, position) => {
	// console.log(diapo)
	// console.log(position)
	// Création d'une div qui contiendra un point
	const div = document.createElement("div");
	// Ajout de la classe "dot" à la div
	div.classList.add("dot");
	// Ajout de la div contenant le point au conteneur des points
	conteneur_points.appendChild(div);
});
// Récupération des points du conteneur
const points = document.querySelectorAll("#banner .dot");
// Affichage du premier point sélectionné puisqu'on est initialement sur la première diapo
const premier_point = points[0];
premier_point.classList.add("dot_selected")

/*__________-FONCTION D'AFFICHAGE DES IMAGES TEXTES ET POINTS-__________*/
function ImageTextePoint() {
	// Affichage de l'image et du texte associé en fonction du nouvel index (correspondant à la maj du compteur)
	image_affichee.src = "./assets/images/slideshow/" + slides[compteur].image;
	texte_affiche.innerHTML = slides[compteur].tagLine
	// Pour chaque point, on met à jour son affichage en fonction du positionnement dans le tableau
	points.forEach((point_courant, position) => {	
	if (compteur === position)	{
		point_courant.classList.add("dot_selected");
	}
	else {
		point_courant.classList.remove("dot_selected");
	}
});
}

/*__________-INSTRUCTIONS DECLENCHEES AU CLIC SUR LES FLECHES GAUCHE ET DROITE-__________*/
fleche_gauche.addEventListener("click", function () {
	// Si on est au premier index, on revient à la dernière diapo
	if (compteur === 0) {
		compteur = nombre_diapos - 1;
	}
	// Sinon on décrémente le compteur pour passer à la précédente
	else {
		compteur--;
	}
	// MAJ de l'image, du texte et du point en fonction du positionnement
	ImageTextePoint();
});
fleche_droite.addEventListener("click", function () {
	// Si on est au dernier index, on réinitialise le compteur afin de revenir à la première diapo
	if (compteur === nombre_diapos - 1) {
		compteur = 0;
	}
	// Sinon on incrémente le compteur pour passer à la suivante
	else {
		compteur++;
	}
	// MAJ de l'image, du texte et du point en fonction du positionnement
	ImageTextePoint();
});
