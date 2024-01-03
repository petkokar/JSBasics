function holidayJessy(input) {
    let tripCost = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let spendDaysSequence = 0;

    while (availableMoney < tripCost) {
        let actionType = input[index];
        let sumSpendOrSave = Number(input[index + 1]);

        if (actionType === 'spend'){
            spendDaysSequence += 1;
            availableMoney -= sumSpendOrSave;

        }

        if (actionType === 'save') {
            spendDaysSequence = 0;
            availableMoney += sumSpendOrSave;
        }

        if (availableMoney < 0) {
            availableMoney = 0;
        }

        index += 2;

        if (spendDaysSequence >= 5){
            break;
        }
    }

    if (spendDaysSequence >= 5) {
        console.log(`You can't save the money.`);
        console.log((index - 2) / 2);
    } else {
        console.log( `You saved the money for ${(index - 2) / 2} days.`);
    }
    
}

// holidayJessy(['2000', '1000', 'spend', '1200', 'save', '2000']);