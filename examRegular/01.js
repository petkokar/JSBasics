function solve(input) {
    let paintBoxCount = Number(input[0]);
    let tapetiRollsCount = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let chetkaPrice = Number(input[3]);

    let paintTotalPrice = paintBoxCount * 21.5;
    let tapetiTotalPrice = tapetiRollsCount * 5.2;
    let glovesNeedCount = Math.ceil(tapetiRollsCount * 0.35);
    let chetkiNeedCount = Math.floor(paintBoxCount * 0.48);

    let glovesTotalPrice = glovesNeedCount * glovesPrice;
    let chetkiTotalPrice = chetkaPrice * chetkiNeedCount;

    let allSum = paintTotalPrice + tapetiTotalPrice + glovesTotalPrice + chetkiTotalPrice;
    let deliverySum = allSum / 15;

    console.log(`This delivery will cost ${deliverySum.toFixed(2)} lv.`);


}

// solve (['10', '8', '2.2', '5']);