function calculer(event) {
  event.preventDefault();
  console.log("Effectuer un calcul");
  const PrenomInput = document.getElementById("prenom");
  const valueOfPrenomInput = PrenomInput.value.trim();

  const FirstNumberInput = document.getElementById("premierNombre");
  const valueOfFirstNumberInput = FirstNumberInput.value;

  const SecondNumberInput = document.getElementById("secondNombre");
  const valueOfSecondNumberInput = SecondNumberInput.value;
  const operationChoisiInput = document.getElementById("operation");
  const operationChoisi = Number(operationChoisiInput.value);

  if (isNaN(operationChoisi)) {
    operationChoisi = 0;
  }

  let resultat;
  let operation;
  let operateur;
  switch (operationChoisi) {
    case 1:
      resultat =
        Number(valueOfFirstNumberInput) + Number(valueOfSecondNumberInput);
      operation = "la somme";
      operateur = "+";
      break;
    case 2:
      resultat =
        Number(valueOfFirstNumberInput) - Number(valueOfSecondNumberInput);
      operation = "la soustraction";
      operateur = "-";
      break;
    case 3:
      resultat =
        Number(valueOfFirstNumberInput) * Number(valueOfSecondNumberInput);
      operation = "la multiplication";
      operateur = "x";
      break;
    case 4:
      resultat =
        Number(valueOfFirstNumberInput) / Number(valueOfSecondNumberInput);
      operation = "la division";
      operateur = "/";
      break;
    default:
      resultat = "Choisissez une opération !!";
      break;
  }

  console.log("Prénom: " + valueOfPrenomInput);
  console.log("Résultat: " + resultat);

  // Initiales

  // Concaténation
  //let nameAndResult = valueOfPrenomInput + " le résultat est " + resultat;
  let nameAndResult = `${valueOfPrenomInput} le résultat de ${operation} ${valueOfFirstNumberInput}${operateur}${valueOfSecondNumberInput} est ${resultat}`;

  // Longueur d'une chaine
  const length = nameAndResult.length;
  console.log("Taille chaine caractère: " + length);
  document.getElementById("Initial").innerHTML = valueOfPrenomInput[0];
  document.getElementById("result").innerHTML = nameAndResult;

  const initialElement = document.getElementById("Initial");

  // Vérifie si le prénom est vide
  if (valueOfPrenomInput.trim() === "") {
    initialElement.style.border = "none";
    initialElement.style.backgroundColor = "transparent"; // Facultatif pour enlever le fond gris
    initialElement.style.padding = "0"; // Évite l’espace vide
  } else {
    initialElement.style.border = "solid 1px black"; // Remet la bordure si un prénom est saisi
    initialElement.style.backgroundColor = "gray";
    initialElement.style.padding = "1px 9px"; // Remet le padding si besoin
  }
}
