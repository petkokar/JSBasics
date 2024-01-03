function uniPinCodes(input) {

    let num1Max = Number(input[0]);
    let num2Max = Number(input[1]);
    let num3Max = Number(input[2]);
    const simpleNums = [2, 3, 5, 7];

    for (let i = 2; i <= num1Max; i += 2) {
        for (let j = 2; j <= num2Max; j++) {
            if (j === 2 || j === 3 || j === 5 || j === 7) {
                for (let k = 2; k <= num3Max; k += 2) {
                    console.log(`${i} ${j} ${k}`);

                }
            }

        }
    }
}


// uniPinCodes(['3', '5', '5']);