function calculateTotalAmount(grocery1, grocery2, grocery3) {
    let totalAmount = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerHTML = `Total amount is $${totalAmount}`;
}