function maxNum(input) {
    let n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;
    let sumAll = 0;
    let sumTotal= 0;

    for (var i = 1; i <= n; i++) {
        let num = Number(input[i]);

        if(num > max) {
            max = num;
        }
        
        sumAll += Number(input[i]);
        sumTotal = sumAll - max;

    }
    if (sumTotal == max) {
        console.log(`Yes Sum = ${max}`);
    } else {
        console.log(`No Diff = ${Math.abs(max - sumTotal)}`);
    }
}

maxNum(['7', '3', '4', '1', '1', '2', '12', '1']);