function sumOf2Nums(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let MagicNum = Number(input[2]);
    let magicPairIsFound = false;

    let pairCount = 0;

    for(let num1 = startNum; num1 <= endNum; num1++) {
        for (let num2 = startNum; num2 <= endNum; num2++){
            pairCount++;
            if (num1 + num2 === MagicNum){
                console.log(`Combination N:${pairCount} (${num1} + ${num2} = ${MagicNum})`);
                magicPairIsFound = true;
                break;
            }
        }

        if (magicPairIsFound) {
            break;
        }
    }

    if(!magicPairIsFound){
        console.log(`${pairCount} combinations - neither equals ${MagicNum}`);
    }
}

// sumOf2Nums(['1', '10', '5']);