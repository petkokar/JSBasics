function solve(input) {
    let index = 0;
    let bestPlayer = '';
    let bestPlayerGoals = 0;

    while (input[index] !== 'END') {
       let name = input[index];
       let goals = Number(input[index + 1]);

       if (goals > bestPlayerGoals) {
          bestPlayerGoals = goals;
          bestPlayer = name;
       } else if (bestPlayerGoals >= 10) {
        break;
       }
    index++;

    }
    console.log(`${bestPlayer} is the best player!`);
    if (bestPlayerGoals >= 3) {
        console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestPlayerGoals} goals`);
    }

}

// solve(["Silva",
// "5",
// "Harry Kane",
// "10"])
