function solve (input) {
    let daysCount = Number(input[0]);

    let LitersRakia = 0;
    let overallDegrees = 0;

    for (let day = 1; day <= daysCount * 2; day += 2){
        let curDegrees = Number(input[day + 1]);
        let curLiters = Number(input[day]);
        
        LitersRakia = LitersRakia + curLiters;
        overallDegrees = overallDegrees + (curLiters * curDegrees);

    }

    let averageDegrees = overallDegrees / LitersRakia;
    console.log(`Liters: ${LitersRakia.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if (averageDegrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if (averageDegrees >= 38 && averageDegrees < 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }


}

solve(["2",
"200",
"43",
"200",
"40"])
