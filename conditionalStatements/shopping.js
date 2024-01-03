function shopping(input){
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramsCount = Number(input[3]);

    let videoCardCost = videoCardCount * 250;
    let processorPrice = videoCardCost * 0.35;
    let ramsPrice = videoCardCost * 0.1;

    let productsPrice = videoCardCost + processorPrice * processorCount + ramsPrice * ramsCount;

    if (videoCardCount > processorCount) {
        productsPrice -= productsPrice * 0.15;
    }

    if (productsPrice > budget) {
        console.log(`Not enough money! You need ${(productsPrice - budget).toFixed(2)} leva more!`);
    } else {
        console.log(`You have ${(budget - productsPrice).toFixed(2)} leva left!`);
    }

}

// shopping(["900", "2", "1", "3"]);