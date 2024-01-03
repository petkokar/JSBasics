function suitcaseLoad (input) {

    let capacity = Number(input[0]);
    let index = 1;
    let suitcaseCount = 0;

    while (input[index] !== 'End') {
        let currLoad = Number(input[index]);
        if (currLoad > capacity) {
            console.log('No more space!');
            break;
        }
        if (index % 3 === 0) {
            capacity -= currLoad + (currLoad * 0.1);
        } else {
            capacity -= currLoad;
        }
        
        suitcaseCount++;
        index++;
    
    }
    if (input[index] === 'End') {
        console.log('Congratulations! All suitcases are loaded!');
    }
    console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);

    
}

suitcaseLoad(["700.5",
"180",
"340.6",
"126",
"220"])

