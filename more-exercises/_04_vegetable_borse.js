function borsa(input){
    let priceKgVegetables = Number(input[0]);
    let priceKgFruits = Number(input[1]);
    let totalKgVegetables = Number(input[2]);
    let totalKgFruits = Number(input[3]);

    let euroPrice = 1.94; 

    let totalVegetablePrice = priceKgVegetables * totalKgVegetables;
    let totalFruitPrice = priceKgFruits * totalKgFruits;

    let allPrice = ((totalFruitPrice + totalVegetablePrice) / euroPrice).toFixed(2);

    console.log(allPrice);

}

// borsa(['0.194', '19.4', '10', '10']);