function foodDelivery(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let chickenPrice = chickenMenu * 10.35;
    let fishPrice = fishMenu * 12.4;
    let veganPrice = veganMenu * 8.15;

    let totalMenuCost = chickenPrice + fishPrice + veganPrice;
    let desertCost = totalMenuCost * 0.2;
    // console.log(desertCost);
    let deliveryPrice = 2.5;

    let totalDeliveryCost = totalMenuCost + desertCost + deliveryPrice;
    
    console.log(totalDeliveryCost);


}

// foodDelivery(["2","4","3"]);