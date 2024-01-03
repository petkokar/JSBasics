function littleShop(input){
    let product = input[0];
    let town = input[1];
    let qty = Number(input[2]);
    let price = 0;

    switch(town){
        case 'Sofia':
            if (product === 'coffee') {
                price = qty * 0.50;
            } else if (product === 'water') {
                price = qty * 0.80;
            } else if (product === 'beer') {
                price = qty * 1.20;
            } else if (product === 'sweets') {
                price = qty * 1.45;
            } else {
                price = qty * 1.60
            }
            break;

        case 'Plovdiv':
            if (product === 'coffee') {
                price = qty * 0.40;
            } else if (product === 'water') {
                price = qty * 0.70;
            } else if (product === 'beer') {
                price = qty * 1.15;
            } else if (product === 'sweets') {
                price = qty * 1.30;
            } else {
                price = qty * 1.50
            }
            break;
        case 'Varna':
            if (product === 'coffee') {
                price = qty * 0.45;
            } else if (product === 'water') {
                price = qty * 0.70;
            } else if (product === 'beer') {
                price = qty * 1.10;
            } else if (product === 'sweets') {
                price = qty * 1.35;
            } else {
                price = qty * 1.55
            }
            break;
    }
    console.log(price);


}

// littleShop(['coffee','Varna','2']);