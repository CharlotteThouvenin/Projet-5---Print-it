// tableau avec les images et les textes

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


// récupérer l'image et le texte dans le DOM

let image = document.querySelector(".banner-img")
let tagLine = document.querySelector("#banner p")


//récupérer les flèches de naviguation

const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");

//variable pour connnaitre la position de l'image dans le tabeau
let numeroSlide = 0


// ajout des dots

let dots = document.querySelector(".dots");
let dot 
let dotArray=[]

for(let i = 0; i < slides.length; i++){
	dot = document.createElement("div");
	dots.appendChild(dot);
	dot.classList.add("dot");
	dotArray.push(dot);
	if(i==0){
		dot.classList.add("dot_selected")
	}
}


// fonction pour changer les slides


function changerSlide (sens){

	// permet de modifier l'index de l'image dans le tabeau en avant ou en arrière
	numeroSlide = numeroSlide + sens

	
	//lorsqu'on est sur la première slide, permet de revenir à la dernière slide avec la flèche droite 
	if(numeroSlide < 0){
		numeroSlide = slides.length -1
	}

	// lorsqu'on est sur la dernière slide, permet de revenir à la première slide avec la flèche gauche
	if(numeroSlide > slides.length - 1){
		numeroSlide = 0
	}


	// change l'attribut source de l'image 
	image.src = "./assets/images/slideshow/" + slides[numeroSlide].image

	// change le texte contenu dans <p>
	tagLine.innerHTML = slides[numeroSlide].tagLine

	// parcours tous les dot pour supprimer la class selected
	for (var i = 0; i < dotArray.length; i++) {
		dotArray[i].classList.remove("dot_selected");
	  }

	// rajout de la class selected sur le dot qui a la même position que l'image dans le tabeau
	dotArray[numeroSlide].classList.add("dot_selected")
	
}



// event listener déclanchant la foncion changer les slides


arrowright.addEventListener("click", () =>{
	changerSlide(1)
})

arrowleft.addEventListener("click",() => {
	changerSlide(-1)
})






