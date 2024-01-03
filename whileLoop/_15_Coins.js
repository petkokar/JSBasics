function coins(input) {
    let inputMoney = Math.floor(Number(input[0]) * 100);
    let currSum = 0;
    let coinsCount = 0;

    while (inputMoney !== currSum) {
    if (inputMoney - currSum >= 200) {
      currSum += 200;
      coinsCount += 1;
    } else if (inputMoney - currSum >= 100) {
      currSum += 100;
      coinsCount += 1;
    } else if (inputMoney - currSum >= 50) {
        currSum += 50;
        coinsCount += 1;
    } else if (inputMoney - currSum >= 20) {
        currSum += 20;
        coinsCount += 1;
    } else if (inputMoney - currSum >= 10) {
        currSum += 10;
        coinsCount += 1;
    } else if (inputMoney - currSum >= 5) {
        currSum += 5;
        coinsCount += 1;
    } else if (inputMoney - currSum >= 2) {
        currSum += 2;
        coinsCount += 1;
    } else if (inputMoney - currSum >= 1) {
      currSum += 1;
      coinsCount += 1;
    }
}
console.log(coinsCount);
}

// coins(['1.23']);