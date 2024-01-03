function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let fullToysPrice = (puzzleCount * 2.6) + (talkingDollsCount * 3) + (bearsCount * 4.1) + (minionsCount * 8.2) + (trucksCount * 2);

    if (puzzleCount + talkingDollsCount + bearsCount + minionsCount + trucksCount >= 50) {
        fullToysPrice -= fullToysPrice * 0.25;
    }

    fullToysPrice -= fullToysPrice * 0.1;

    if (fullToysPrice >= tripPrice) {
        console.log(`Yes! ${(fullToysPrice - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - fullToysPrice).toFixed(2)} lv needed.`);
    }
   
}

// toyShop(["40.8", "20", "25", "30", "50", "10"]);