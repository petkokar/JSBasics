function sumNums(input) {
    let sum = 0;
    for (let i = 1; i < input.length; i++){
        sum += Number(input[i])
    }
    console.log(sum);

}

sumNums(['4', '45', '-20', '7', '11']);