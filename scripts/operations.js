// Lire le contenu de la balise h1

const contentOfH1Tags = document.getElementsByTagName("h1");

// Afficher le contenu des balises H1
console.log(contentOfH1Tags);

// contenu de la première balise h1
const firstH1 = contentOfH1Tags[0];
console.log(firstH1.innerHTML);

//Libelle du bouton
const button = document.getElementById("calculer");
const buttonLabel = button.innerText;
console.log(buttonLabel);
