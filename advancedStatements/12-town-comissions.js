function comissionsTown(input){
    let town = input[0];
    let sellings = Number(input[1]);
    let comission = 0.0;

    switch(town){
        case 'Sofia':
            if (sellings >= 0 && sellings <= 500){
                comission = sellings * 0.05;
            } else if (sellings >= 500 && sellings <=1000){
                comission = sellings * 0.07;   
            } else if (sellings >= 1000 && sellings <= 10000){
                comission = sellings * 0.08;  
            } else {
                comission = sellings * 0.12;
            }
        break;
        case 'Varna':
            if (sellings >= 0 && sellings <= 500){
                comission = sellings * 0.045;
            } else if (sellings >= 500 && sellings <=1000){
                comission = sellings * 0.075;   
            } else if (sellings >= 1000 && sellings <= 10000){
                comission = sellings * 0.10;  
            } else {
                comission = sellings * 0.13;
            }
        break;
        case 'Plovdiv':
            if (sellings >= 0 && sellings <= 500){
                comission = sellings * 0.055;
            } else if (sellings >= 500 && sellings <=1000){
                comission = sellings * 0.08;   
            } else if (sellings >= 1000 && sellings <= 10000){
                comission = sellings * 0.12;  
            } else {
                comission = sellings * 0.145;
            }
        break;
    }
    if(comission > 0){
        console.log(comission.toFixed(2));
    } else {
        console.log('error');
    }

}
// comissionsTown(['Plovdiv', '1600']);