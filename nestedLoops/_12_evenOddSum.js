function evenOddSum(input) {
    let smallNumber = Number(input[0]);
    let bigNumber = Number(input[1]);

    let output = '';

    for (let row = smallNumber; row <= bigNumber; row++) {
        let evenNumSum = 0;
        let oddNumSum = 0;
        let currNumberAsString = `${row}`;
        for (let col = 0; col < currNumberAsString.length; col++){
            let currNum = Number(currNumberAsString[col]);
            if (col % 2 === 0) {
              evenNumSum += currNum;
            } else {
                oddNumSum += currNum;
            }
        }

        if (evenNumSum === oddNumSum) {
            output += `${currNumberAsString} `;
        }
    }

    if (output !== ''){
        console.log(output);
    }
}

evenOddSum(['100000', '100050']);