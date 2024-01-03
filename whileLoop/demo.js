function average(input){
    let numsCount = Number(input[0]);
    let allSum = 0;
    for (let i = 1; i <= numsCount; i++) {
        allSum += Number(input[i]);

    }
    let average = allSum / numsCount;
    console.log(average.toFixed(2));
}

// average(['4', '3', '2', '4', '2']);