function numPyramid(input){
    let num = Number(input[0]);
    let currNum = 0;

    for (let row = 0; row <= num; row++){
        let printRow = '';

        for (let col = 0; col <= row; col++) {
           currNum++;
           printRow += `${currNum} `;

           if (currNum >= num) {
            break;
           }
        }

        console.log(printRow);

        if (currNum >= num) {
            break;
        }
    }

}

// numPyramid(['7']);