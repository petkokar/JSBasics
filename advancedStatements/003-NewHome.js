function newHome(input){
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let flowersPrice = 0;

    switch(flowersType){
        case 'Roses':
            flowersPrice = flowersCount * 5;
            if(flowersCount > 80){
                flowersPrice -= flowersPrice * 0.1;
            }
            break;
        case 'Dahlias':
            flowersPrice = flowersCount * 3.80;
            if(flowersCount > 90){
                flowersPrice -= flowersPrice * 0.15;
            }
            break;
        case 'Tulips':
            flowersPrice = flowersCount * 2.80;
            if(flowersCount > 80){
                flowersPrice -= flowersPrice * 0.15;
            }
            break;
        case 'Narcissus':
            flowersPrice = flowersCount * 3;
            if(flowersCount < 120){
                flowersPrice += flowersPrice * 0.15;
            }
            break;
        case 'Gladiolus':
            flowersPrice = flowersCount * 2.50;
            if(flowersCount < 80){
                flowersPrice += flowersPrice * 0.2;
            }
            break;
    }

    if (flowersPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - flowersPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(flowersPrice - budget).toFixed(2)} leva more.`);
    }



}

// newHome (["Roses", "55", "250"])