function solve(input){
    let shirtPrice = Number(input[0]);
    let sumToReach = Number(input[1]);

    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = (shirtPrice + shortsPrice) * 2;

    let sumAll = shirtPrice + shortsPrice + socksPrice + shoesPrice;
    let sumWithDiscount = sumAll * 0.85;
    
    if (sumWithDiscount >= sumToReach) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${sumWithDiscount.toFixed(2)} lv.`);
    } else {
        console.log('No, he will not earn the world-cup replica ball.');
        console.log(`He needs ${(sumToReach - sumWithDiscount).toFixed(2)} lv. more.`);
    }

}

// solve(['25', '100']);