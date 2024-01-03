function fitnessCard(input) {
    let moneyGot = Number(input[0]);
    let sexType = input[1];
    let age = Number(input[2]);
    let sportType = input[3];

    let totalCost = 0;

    switch (sportType) {
        case 'Gym':
            switch (sexType) {
                case 'm':
                    totalCost += 42;
                    break;
                case 'f':
                    totalCost += 35;
                    break;
            }
            break;
        case 'Boxing':
            switch (sexType) {
                case 'm':
                    totalCost += 41;
                    break;
                case 'f':
                    totalCost += 37
                    break;
            }
            break;
        case 'Yoga':
            switch (sexType) {
                case 'm':
                    totalCost += 45;
                    break;
                case 'f':
                    totalCost += 42;
                    break;
            }
            break;
        case 'Zumba':
            switch (sexType) {
                case 'm':
                    totalCost += 34;
                    break;
                case 'f':
                    totalCost += 31;
                    break;
            }
            break;
        case 'Dances':
            switch (sexType) {
                case 'm':
                    totalCost += 51;
                    break;
                case 'f':
                    totalCost += 53;
                    break;
            }
            break;
        case 'Pilates':
            switch (sexType) {
                case 'm':
                    totalCost += 39;
                    break;
                case 'f':
                    totalCost += 37;
                    break;
            }
            break;
    }
    if (age <= 19) {
        totalCost -= totalCost * 0.2;
    }

    if (totalCost <= moneyGot) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    } else {
        console.log(`You don't have enough money! You need $${(totalCost - moneyGot).toFixed(2)} more.`);
    }

}

fitnessCard(["20",
"f",
"15",
"Yoga"])
