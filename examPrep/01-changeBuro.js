function changeBuro(input) {
    let bitcoinsCount = Number(input[0]);
    let chinaUanCount = Number(input[1]);
    let comission = Number(input[2]);

    let btcToLv = bitcoinsCount * 1168;
    let uanToUsd = chinaUanCount * 0.15;
    let usdToLv = 1.76;
    let eurToLv = 1.95;

    let sum = btcToLv + (uanToUsd * usdToLv);
    let sumToEuro = sum / eurToLv;
    let comissionPrice = sumToEuro * (comission / 100);

    let total = sumToEuro - comissionPrice;

    console.log(total.toFixed(2));
}

// changeBuro(['1', '5', '5']);