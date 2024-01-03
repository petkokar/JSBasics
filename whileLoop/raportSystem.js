function raportSystem(input) {
    let targetSum = input[0];

    let index = 1;
    let moneyPaidCash = 0;
    let moneyPaidCard = 0;
    let cashCount = 0;
    let cardCount = 0;
    let totalSum = 0;

    while (totalSum <= targetSum) {
        targetSum = Number(input[0]);
        let curProductPrice = Number(input[index]);

        if (index % 2 === 0) {
            if (curProductPrice < 10) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                moneyPaidCard += curProductPrice;
                cardCount += 1;
                totalSum += curProductPrice;
            }
        } else {
            if (curProductPrice > 100) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                moneyPaidCash += curProductPrice;
                cashCount += 1;
                totalSum += curProductPrice;
            }
        }

        index++;

        if (input[index] === 'End') {
            console.log('Failed to collect required money for charity.');
            break;
        }
        if (targetSum < totalSum) {
            let averagePaidCash = moneyPaidCash / cashCount;
            let averagePaidCard = moneyPaidCard / cardCount;
            console.log(`Average CS: ${averagePaidCash.toFixed(2)}`);
            console.log(`Average CC: ${averagePaidCard.toFixed(2)}`);
        }
    }
}


// raportSystem(['500', '120', '8', '63', '256', '78', '317']);
// raportSystem(['600', '86', '150', '98', '227', 'End']);