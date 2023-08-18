function getInputValue(elementId) {
  const elementField = document.getElementById(elementId);
  const elementValue = parseFloat(elementField.value);

  return elementValue;
}

function setInnerText(targetId, value) {
  const element = document.getElementById(targetId);
  element.innerText = value;
}

document.querySelector("#calculate-btn").addEventListener("click", function () {
  const income = getInputValue("income-input");

  const food = getInputValue("food-input");
  const rent = getInputValue("rent-input");
  const cloth = getInputValue("cloth-input");

  const totalExpense = food + rent + cloth;

  setInnerText("expense-amount", totalExpense);

  const balanceAmount = income - totalExpense;
  setInnerText("balance-amount", balanceAmount);
});

document.querySelector("#save-btn").addEventListener("click", function () {
  const balanceAmount = document.querySelector("#balance-amount").innerText;
  const savePercentage = getInputValue("save-input");

  const savingAmount = balanceAmount * (savePercentage / 100);

  setInnerText("saving-amount", savingAmount);

  const remainingBalance = balanceAmount - savingAmount;

  setInnerText("remaining-amount", remainingBalance);
});
