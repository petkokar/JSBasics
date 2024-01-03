function vinProm(input){
    let xSquareMeters = Number(input[0]);
    let yGrapesPerSquare = Number(input[1]);
    let zNeededQtyWine = Number(input[2]);
    let workersCount = Number(input[3]);
    let kgNeededFor1lWine = 2.5;

    let totalGrapes = xSquareMeters * yGrapesPerSquare;
    let winePercentage = totalGrapes * 0.4;

    let wineTotal = winePercentage / kgNeededFor1lWine;
    let wineLeftForWorkers = (wineTotal - zNeededQtyWine) / workersCount;

    if (wineTotal >= zNeededQtyWine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineTotal)} liters.`);
        console.log(`${Math.ceil(wineTotal - zNeededQtyWine)} liters left -> ${Math.ceil(wineLeftForWorkers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(zNeededQtyWine - wineTotal)} liters wine needed.`);
    }

}

// vinProm(['650', '2', '175', '3']);