function tennisPlayer(input){
    let tournamentsCount = Number(input[0]);
    let startedPoints = Number(input[1]);

    let allPoints = 0;
    let allWins = 0;

    for(let i = 0; i < tournamentsCount; i += 1){
        switch(input[i + 2]){
            case 'W':
                allPoints += 2000;
                allWins += 1;
                break;
            case 'F':
                allPoints += 1200;
                break;
            case 'SF':
                allPoints += 720;
                break;
        }
    }
    console.log(`Final points: ${allPoints + startedPoints}`);
    console.log(`Average points: ${Math.floor(allPoints / tournamentsCount)}`);
    console.log(`${((allWins / tournamentsCount) * 100).toFixed(2)}%`);


}

// tennisPlayer(["5", "1400", "F", "SF" ,"W" ,"W" ,"SF"]);