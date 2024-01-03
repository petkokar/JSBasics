function marinaPets (input){
    let daysOut = Number(input[0]);
    let foodLeftKg = Number(input[1]);
    let dogFoodPerDayKg = Number(input[2]);
    let catFoodPerDayKg = Number(input[3]);
    let turtleFoodPerDayG = Number(input[4]);

    let turtleFoodInKg = turtleFoodPerDayG / 1000;

    let dogFoodNeed = daysOut * dogFoodPerDayKg;
    let catFoodNeed = daysOut * catFoodPerDayKg;
    let turtleFoodNeed = daysOut * turtleFoodInKg;

    let foodTotalNeed = dogFoodNeed + catFoodNeed + turtleFoodNeed;

    if (foodLeftKg >= foodTotalNeed){
        console.log(`${Math.floor(foodLeftKg - foodTotalNeed)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodTotalNeed - foodLeftKg)} more kilos of food are needed.`);
    }


}

// marinaPets(['2', '10', '1', '1', '1200']);