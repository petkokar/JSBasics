function barcodeScanner(input) {
    let number1 = input[0];
    let number2 = input[1];

    let start1 = Number(number1[0]);
    let end1 = Number(number2[0]);

    let start2 = Number(number1[1]);
    let end2 = Number(number2[1]);

    let start3 = Number(number1[2]);
    let end3 = Number(number2[2]);

    let start4 = Number(number1[3]);
    let end4 = Number(number2[3]);

    let result = '';

    for (let i = start1; i <= end1; i++) {
        if (i % 2 === 0) {
            continue;
        }
        for (let j = start2; j <= end2; j++) {
            if (j % 2 === 0) {
                continue;
            }
            for (let k = start3; k <= end3; k++) {
                if (k % 2 === 0) {
                    continue;
                }
                for (let l = start4; l <= end4; l++) {
                    if (l % 2 === 0) {
                        continue;
                    }
                
                    result += `${i}${j}${k}${l} `
                
                }
            }
        }
    }


    console.log(result);
}

// barcodeScanner(['2345', '6789']);