const calculateBtn = document.getElementById("calculate");
const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const totalSpan = document.getElementById("total");

calculateBtn.addEventListener('click', () => {
    const tipAmount = billAmountInput.value * (tipPercentageInput.value / 100);
    const totalAmount = parseInt(billAmountInput.value) + tipAmount;
    totalSpan.innerHTML = `Total: R ${totalAmount.toFixed(2)}`;
    
});