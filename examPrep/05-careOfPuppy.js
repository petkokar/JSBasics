function careOfPuppy(input) {
    let totalFood = Number(input[0]) * 1000;

    let index = 1;
    let foodEaten = 0;

    while (input[index] !== 'Adopted') {
        let currFood = Number(input[index]);

        foodEaten += currFood;
        
        index++
    }

    if (totalFood >= foodEaten) {
        console.log(`Food is enough! Leftovers: ${totalFood - foodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(totalFood - foodEaten)} grams more.`);
    }

}

careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"]);