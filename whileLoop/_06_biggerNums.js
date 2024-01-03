function findMaxNum(input) {
    let command = input[0];
    let index = 1;
    let maxNum = Number.MIN_SAFE_INTEGER;
    
    while (command !== 'Stop'){
        let num = Number(command);

        if (num > maxNum){
            maxNum = num;
        }

        command = input[index];
        index++;
    }
    console.log(maxNum);
}

findMaxNum(["100", "99", "80", "70", "Stop"]);