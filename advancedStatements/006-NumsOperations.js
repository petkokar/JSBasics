function numsOperations(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = (input[2]);

    if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    } else {
        switch (operator){
            case '+':
                let plusEvenOrOdd;
                let resultPlus = num1 + num2;
                if (resultPlus % 2 ===0){
                    plusEvenOrOdd = 'even';
                } else {
                    plusEvenOrOdd = 'odd';
                }
                console.log(`${num1} ${operator} ${num2} = ${resultPlus} - ${plusEvenOrOdd}`);
                break;
            case '-':
                let minusEvenOrOdd;
                let resultMinus = num1 - num2;
                if (resultMinus % 2 ===0){
                    minusEvenOrOdd = 'even';
                } else {
                    minusEvenOrOdd = 'odd';
                }
                console.log(`${num1} ${operator} ${num2} = ${resultMinus} - ${minusEvenOrOdd}`);
                break;
            case '*':
                let multiplyEvenOrOdd;
                let resultMultiply = num1 * num2;
                if (resultMultiply % 2 ===0){
                    multiplyEvenOrOdd = 'even';
                } else {
                    multiplyEvenOrOdd = 'odd';
                }
                console.log(`${num1} ${operator} ${num2} = ${resultMultiply} - ${multiplyEvenOrOdd}`);
                break;
            case '/':
                let resultDivision = num1 / num2;
                console.log(`${num1} / ${num2} = ${(resultDivision).toFixed(2)}`);
                break;
            case '%':
                console.log(`${num1} % ${num2} = ${num1 % num2}`);
                break;
        }
    }

}

// numsOperations(['10', '12', '%']);