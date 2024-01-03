function basketballEquipment(input) {
    let yearlyCost = Number(input[0]);

    let shoesCost = yearlyCost * 0.6;
    let clothesCost = shoesCost * 0.8;
    let ballCost = clothesCost * 0.25;
    // console.log(ballCost);
    let acessoriesCost = ballCost * 0.2;   
    // console.log(acessoriesCost);
    let totalEquipmentCost = yearlyCost + shoesCost + clothesCost + ballCost + acessoriesCost;
    console.log(totalEquipmentCost);


}

// basketballEquipment(["365"]);