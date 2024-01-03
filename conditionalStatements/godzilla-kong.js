function godzillaVsKong(input){
    let movieBudget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let actorsClothesPrice = Number(input[2]);

    let movieDecorPrice = movieBudget * 0.1;
    let allClothesPrice = actorsCount * actorsClothesPrice;

    if (actorsCount > 150) {
        allClothesPrice -= allClothesPrice * 0.1;
    }

    let moviePrice = movieDecorPrice + allClothesPrice;

    if (moviePrice > movieBudget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(moviePrice - movieBudget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(movieBudget - moviePrice).toFixed(2)} leva left.`);
    }

}
// godzillaVsKong(["20000", "120", "55.5"]);