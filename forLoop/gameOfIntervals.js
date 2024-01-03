function gameOfIntervals(input) {
    let movesCount = Number(input[0]);

    let points = 0;
    let invalidNums = 0;
    let from0to9Count = 0;
    let from10to19Count = 0;
    let from20to29Count = 0;
    let from30to39Count = 0;
    let from40to50Count = 0;

    for (let i = 1; i <= movesCount; i++) {
        let curNum = Number(input[i]);

        if (curNum >= 0 && curNum <= 9) {
            points += curNum * 0.2;
            from0to9Count += 1;
        } else if (curNum >= 10 && curNum <= 19) {
            points += curNum * 0.3;
            from10to19Count += 1;
        } else if (curNum >= 20 && curNum <= 29) {
            points += curNum * 0.4;
            from20to29Count += 1;
        } else if (curNum >= 30 && curNum <= 39) {
            points += 50;
            from30to39Count += 1;
        } else if (curNum >= 40 && curNum <= 50) {
            points += 100;
            from40to50Count += 1;
        } else if (curNum < 0 || curNum > 50) {
            points = points / 2;
            invalidNums += 1;
        }
    }
    console.log(points.toFixed(2));
    let percentagesFrom0To9 = from0to9Count / movesCount * 100;
    let percentagesFrom10to19 = from10to19Count / movesCount * 100;
    let percentagesFrom20to29 = from20to29Count / movesCount * 100;
    let percentagesFrom30to39 = from30to39Count / movesCount * 100;
    let percentagesFrom40to50 = from40to50Count / movesCount * 100;
    let percentagesInvalidNums = invalidNums / movesCount * 100;
    console.log(`From 0 to 9: ${percentagesFrom0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentagesFrom10to19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentagesFrom20to29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentagesFrom30to39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentagesFrom40to50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentagesInvalidNums.toFixed(2)}%`);

}

// gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);