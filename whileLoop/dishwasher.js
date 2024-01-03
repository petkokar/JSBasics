function dishwasher (input) {
    let bottlesCount = Number(input[0]);
    let totalDetergent = bottlesCount * 750;

    let mlNeedForChiniq = 5;
    let mlNeedForTendjera = 15;
    let dishesCount = 0;
    let potsCount = 0;

    let index = 1;

    while (input[index] !== 'End') {
        let curDishCount = Number(input[index]);
        if (index % 3 === 0) {
            potsCount += curDishCount;
            totalDetergent -= curDishCount * mlNeedForTendjera;
        } else {
            dishesCount += curDishCount;
            totalDetergent -= curDishCount * mlNeedForChiniq;
        }
        if (totalDetergent < 0) {
            break;
        }

        index++;
    }

    if (totalDetergent >= 0) {
        console.log('Detergent was enough!');
        console.log(`${dishesCount} dishes and ${potsCount} pots were washed.`);
        console.log(`Leftover detergent ${Math.abs(totalDetergent)} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`);
    }

}

// dishwasher(['2', '53', '65', '55', 'End']);
// dishwasher(['1', '10', '15', '10', '12', '13', '30']);