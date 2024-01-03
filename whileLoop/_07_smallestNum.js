function findSmallNum(input) {
    let command = input[0];
    let index = 1;
    let minNum = Number.MAX_SAFE_INTEGER;
    
    while (command !== 'Stop'){
        let num = Number(command);

        if (num < minNum){
            minNum = num;
        }

        command = input[index];
        index++;
    }
    console.log(minNum);
}

findSmallNum(["100", "99", "80", "70", "Stop"]);