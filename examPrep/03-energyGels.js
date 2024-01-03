function energyGels (input) {

    let fruit = input[0];
    let size = input[1];
    let setsCountOrdered = Number(input[2]);

    let toBePaid = 0;

    switch(fruit) {
        case 'Watermelon':
            switch(size) {
                case 'small':
                    toBePaid += setsCountOrdered * 2 * 56;
                    break;
                case 'big':
                    toBePaid += setsCountOrdered * 5 * 28.7;
                    break;
            }
            break;
        case 'Mango':
            switch(size) {
                case 'small':
                    toBePaid += setsCountOrdered * 2 * 36.66;
                    break;
                case 'big':
                    toBePaid += setsCountOrdered * 5 * 19.6;
                    break;
            }
            break;
        case 'Pineapple':
            switch(size) {
                case 'small':
                    toBePaid += setsCountOrdered * 2 * 42.1;
                    break;
                case 'big':
                    toBePaid += setsCountOrdered * 5 * 24.8;
                    break;
            }
            break;
        case 'Raspberry':
            switch(size) {
                case 'small':
                    toBePaid += setsCountOrdered * 2 * 20;
                    break;
                case 'big':
                    toBePaid += setsCountOrdered * 5 * 15.2;
                    break;
            }
            break;
        
    }
    if (toBePaid >= 400 && toBePaid <= 1000) {
        toBePaid -= toBePaid * 0.15;
        console.log(`${toBePaid.toFixed(2)} lv.`);
    } else if (toBePaid > 1000) {
        toBePaid -= toBePaid * 0.5;
        console.log(`${toBePaid.toFixed(2)} lv.`);
    } else {
        console.log(`${toBePaid.toFixed(2)} lv.`);
    }
    

}

// energyGels(['Watermelon', 'big', '4']);
// energyGels(["Pineapple",
// "small",
// "1"]);
