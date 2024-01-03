function steps(input) {
    let allSteps = 0;
    let index = 0;

    while (allSteps < 10000) {
        if (input[index] === 'Going home') {
            allSteps += Number(input[index + 1]);
            break;
        }

        allSteps += Number(input[index]);

        index += 1;
    }

    if (allSteps < 10000) {
        console.log(`${10000 - allSteps} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${allSteps - 10000} steps over the goal!`);
    }
}

// steps (['1000', '1500', '2000', '6500']);