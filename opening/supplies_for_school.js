function suppliesForSchool(input){
    let pensCost = Number(input[0]);
    let markersCost = Number(input[1]);
    let preparatCost = Number(input[2]);
    let discountPercentage = Number (input[3]);

    let penTotalCost = pensCost * 5.8;
    let markersTotalCost = markersCost * 7.2;
    let preparatTotalCost = preparatCost * 1.2;
    let discount = discountPercentage / 100;

    let priceForAll = penTotalCost + markersTotalCost + preparatTotalCost;
    let totalCost = priceForAll - (priceForAll * discount);
    console.log(totalCost);
}

// suppliesForSchool(["2","3","4","25"]);