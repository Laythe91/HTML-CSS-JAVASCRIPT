function calculer() {
  console.log("Effectuer un calcul");
  const FirstNumberInput = document.getElementById("firstNumber");
  const valueOfFirstNumberInput = FirstNumberInput.value;

  const SecondNumberInput = document.getElementById("secondNumber");
  const valueOfSecondNumberInput = SecondNumberInput.value;
  const operationChoisiInput = document.getElementById("monSelect");
  const operationChoisi = Number(operationChoisiInput.value);

  let resultat;
  switch (operationChoisi) {
    case 0:
      resultat = "Choisissez une opération !!";
      break;

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
  }

  console.log(resultat);

  document.getElementById("result").innerHTML = resultat;
}
