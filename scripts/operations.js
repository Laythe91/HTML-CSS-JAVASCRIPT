function calculer(event) {
  event.preventDefault();
  console.log("Effectuer un calcul");
  const FirstNumberInput = document.getElementById("premierNombre");
  const valueOfFirstNumberInput = FirstNumberInput.value;

  const SecondNumberInput = document.getElementById("secondNombre");
  const valueOfSecondNumberInput = SecondNumberInput.value;
  const operationChoisiInput = document.getElementById("operation");
  const operationChoisi = Number(operationChoisiInput.value);

  let resultat;
  switch (operationChoisi) {
    case 1:
      resultat =
        Number(valueOfFirstNumberInput) + Number(valueOfSecondNumberInput);
      break;
    case 2:
      resultat =
        Number(valueOfFirstNumberInput) - Number(valueOfSecondNumberInput);
      break;
    case 3:
      resultat =
        Number(valueOfFirstNumberInput) * Number(valueOfSecondNumberInput);
      break;
    case 4:
      resultat =
        Number(valueOfFirstNumberInput) / Number(valueOfSecondNumberInput);
      break;
    default:
      resultat = "Choisissez une opération !!";
      break;
  }

  console.log(resultat);

  document.getElementById("result").innerHTML = resultat;
}
