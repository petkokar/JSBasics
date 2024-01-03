function sumOfPrimeAndNone (input) {
    let index = 0;
    let allPrimeSum = 0;
    let allNonPrimeSum = 0;

    while (input[index] !== 'stop') {
        let currNum = Number(input[index]);
        if (currNum < 0) {
        console.log(`Number is negative.`);
        } else if (currNum === 0 || currNum === 1) {
            allNonPrimeSum += currNum
        } else {
            let isNonPrime = false;

            for (let col = 2; col < currNum; col++){
                if (currNum % col === 0) {
                    isNonPrime = true;
                    break;
                }
            }

            if (isNonPrime) {
                allNonPrimeSum += currNum;
            } else {
                allPrimeSum += currNum;
            }
        }

        index++;
    }

    console.log(`Sum of all prime numbers is: ${allPrimeSum}`);
    console.log(`Sum of all non prime numbers is: ${allNonPrimeSum}`);
}

sumOfPrimeAndNone(['3', '9', '0', '7', '19', '4', 'stop']);