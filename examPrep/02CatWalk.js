function catWalk(input) {
    let minsWalkPerDay = Number(input[0]);
    let walksCountDay = Number(input[1]);
    let catCaloriesConsumed = Number(input[2]);

    let totalTimeWalk = minsWalkPerDay * walksCountDay;
    let totalBurnedCalories = totalTimeWalk * 5;
    let percentNeededForWalk = catCaloriesConsumed / 2;
    
    if (totalBurnedCalories >= percentNeededForWalk) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCalories}.`);
    }

}

// catWalk(['30', '3', '600']);