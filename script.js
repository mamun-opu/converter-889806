function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currencyType = document.getElementById('currencyType').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    let result;
    let header;
    let paragraph;

    if (currencyType === 'usdToCad') {
        result = (amount * 1.25).toFixed(3); // Replace with the actual exchange rate
        document.getElementById('CadResult').innerText = `${result}`;
        document.getElementById('usdResult').innerText = `${amount}`;
        header = 'USD to CANADIAN Dollar';
        paragraph = 'Convert USD to CAD at the real exchange rate.'
    } else if (currencyType === 'cadToUsd') {
        result = (amount / 1.25).toFixed(3); // Replace with the actual exchange rate
        document.getElementById('usdResult').innerText = `${result}`;
        document.getElementById('CadResult').innerText = `${amount}`;
        header = 'CANADIAN to USD Dollar';
        paragraph = 'Convert CAD to USD at the real exchange rate.';
    }

    document.getElementById('converter-header').innerText = header;
    document.getElementById('converter-paragraph').innerText = paragraph;
}
