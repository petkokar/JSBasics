function fishing(input){
    let budget = Number(input[0]);
    let seasonType = input[1];
    let fishersCount = Number(input[2]);
    let boatRentPrice = 0;

    if(seasonType === 'Spring') {
        boatRentPrice = 3000;
    } else if (seasonType === 'Summer' || seasonType === 'Autumn'){
        boatRentPrice = 4200;
    } else {
        boatRentPrice = 2600;
    }

    if (fishersCount <= 6){
        boatRentPrice -= boatRentPrice * 0.1;
    } else if (fishersCount >= 7 && fishersCount <=11){
        boatRentPrice -= boatRentPrice * 0.15;
    } else {
        boatRentPrice -= boatRentPrice * 0.25;
    }

    let fishersEvenOrOdd = fishersCount % 2 === 0;
    let noAutumn = seasonType !== 'Autumn';

    if(fishersEvenOrOdd && noAutumn){
        boatRentPrice -= boatRentPrice * 0.05;
    }

    if (boatRentPrice <= budget){
        console.log(`Yes! You have ${(budget - boatRentPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatRentPrice - budget).toFixed(2)} leva.`);
    }

}


// fishing(["3000", "Summer", "7"]);