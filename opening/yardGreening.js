function yardGreening(input){

    let squareMeters = Number(input[0]);
    let totalCostWithoutDiscount = squareMeters * 7.61;
    let discount = totalCostWithoutDiscount * 0.18;
    let totalCost = totalCostWithoutDiscount - discount;

    console.log(`The final price is: ${totalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`)


}

// yardGreening(["550"]);