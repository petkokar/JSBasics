function sumNums(input){
    let targetNum = Number(input[0]);
    let sumNum = 0;
    let index = 1;

    while (sumNum < targetNum){
        let currNum = Number(input[index]);
        sumNum += currNum;
        index++;
    }
    console.log(sumNum);

}

// sumNums(["100", "10", "20", "30", "40"]);