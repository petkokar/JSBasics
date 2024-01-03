function foodForPets (input) {
    let daysCount = Number(input[0]);
    let totalFood = Number(input[1]);

    let sumEatenDog = 0;
    let sumEatenCat = 0;
    let biscuitsCount = 0;
    let totalFoodEaten = 0;
    let counter = 2;

    for (let day = 1; day <= daysCount; day += 1) {
        let foodEatenDog = Number(input[counter++]);
        let foodEatenCat = Number(input[counter++]);

        sumEatenDog += foodEatenDog;
        sumEatenCat += foodEatenCat;

        
        if (day % 3 === 0) {
            let totalFoodPerDay = foodEatenCat + foodEatenDog;
            biscuitsCount += totalFoodPerDay * 0.1;
        }
    }
    totalFoodEaten += sumEatenCat + sumEatenDog;
    let dogPercent = (sumEatenDog / totalFoodEaten) * 100;
    let catPercent = (sumEatenCat / totalFoodEaten) * 100;

    let totalPercent = (totalFoodEaten / totalFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuitsCount)}gr.`);
    console.log(`${totalPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"]);