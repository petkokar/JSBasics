function leftRightSum(input) {
    let n = Number(input[0]);
    let rightSum = 0;
    let leftSum = 0;

    for (var i = 1; i <= n; i++){
        leftSum += Number(input[i]);
        // console.log(leftSum);
    }
    
    for (var i = 1; i <= n; i++){
        rightSum += Number(input[i+2])
        // console.log(rightSum);
    }

    if(leftSum == rightSum){
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
    }
}

leftRightSum(['2', '90', '9', '50', '50']);