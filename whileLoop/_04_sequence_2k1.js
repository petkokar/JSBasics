function sequence2k1(input){
    let maxNum = Number(input[0]);
    let curNum = 1;

    while (curNum <= maxNum){
        console.log(curNum);
        curNum = curNum * 2 + 1;
    }

}

// sequence2k1(['31']);