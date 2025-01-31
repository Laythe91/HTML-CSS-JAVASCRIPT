function calculer() {
  console.log("Effectuer un calcul");
  const FirstNumberInput = document.getElementById("firstNumber");
  const valueOfFirstNumberInput = FirstNumberInput.value;

  const SecondNumberInput = document.getElementById("secondNumber");
  const valueOfSecondNumberInput = SecondNumberInput.value;

  let resultat =
    Number(valueOfFirstNumberInput) + Number(valueOfSecondNumberInput);
  console.log(resultat);

  document.getElementById("result").innerHTML = resultat;
}
