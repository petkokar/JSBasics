function numsDivisibleBy9(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let sum = 0;
    let validNums = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        if (curNum % 9 === 0){
            sum += curNum;
            validNums += curNum + '\n';
        }
    }
    
    console.log(`The sum: ${sum}`);
    console.log(validNums);

}

numsDivisibleBy9(['100', '200']);