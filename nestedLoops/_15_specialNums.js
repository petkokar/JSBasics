function specialNumbers (input) {
    let number = Number(input[0]);
    let output = '';

    for (let row = 1111; row <= 9999; row++) {
        let rowNumberAsString = `${row} `;

        for (let col = 0; col < rowNumberAsString.length - 1; col++) {
            let currentNumber = Number(rowNumberAsString[col]);
            if (number % currentNumber !== 0) {
                rowNumberAsString = '';
                break;
            }

        }

        output += rowNumberAsString;
    }

    console.log(output);
}

specialNumbers(['3']);