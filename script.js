const upiId = "inderpreet.k@fam";
const payeeName = "Gw Kang";
const transactionNote = "Support Gw Kang";
const minAmount = 10;

const customAmountInput = document.getElementById('customAmountInput');
const upiPaymentLink = document.getElementById('upiPaymentLink');
const errorMessage = document.getElementById('errorMessage');

function updateUpiDetails() {
    let selectedAmount = parseFloat(customAmountInput.value);
    errorMessage.textContent = '';

    if (isNaN(selectedAmount) || selectedAmount < minAmount) {
        errorMessage.textContent = `Please enter an amount of ₹${minAmount} or more.`;
        upiPaymentLink.classList.add('disabled');
        upiPaymentLink.style.pointerEvents = 'none';
        upiPaymentLink.href = "#";
        upiPaymentLink.textContent = `Enter Amount to Pay`;
        return;
    }

    const formattedAmount = selectedAmount.toFixed(2);

    const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${formattedAmount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

    upiPaymentLink.textContent = `Pay ₹${formattedAmount} via UPI`;
    upiPaymentLink.href = upiLink;
    upiPaymentLink.classList.remove('disabled');
    upiPaymentLink.style.pointerEvents = 'auto';
}

customAmountInput.addEventListener('input', updateUpiDetails);

document.addEventListener('DOMContentLoaded', () => {
    customAmountInput.value = minAmount.toString();
    updateUpiDetails();
});
