function cleverLilly(input){
    let lillyAge = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    
    for (let i = 1; i <= lillyAge; i += 1){
        let isEven = i % 2 === 0;

        if(isEven){
            money += ((i / 2) * 10) - 1;
        } else {
            money += toyPrice;
        }
    }
    if (money >= washerPrice){
        console.log(`Yes! ${(money - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - money).toFixed(2)}`);
    }
}

cleverLilly(["10", "170.00", "6"]);