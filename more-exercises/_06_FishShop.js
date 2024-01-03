function fishShop(input){
    let skumriqPriceKg = Number(input[0]);
    let cacaPriceKg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudPricePerKg = skumriqPriceKg += skumriqPriceKg * 0.6;
    let totalPalamudPrice = palamudPricePerKg * palamudKg;
    
    let safridPricePerKg = cacaPriceKg += cacaPriceKg * 0.8;
    let totalSafridPrice = safridPricePerKg * safridKg;

    let totalMidi = midiKg * 7.50;

    let totalAllCost = totalPalamudPrice + totalSafridPrice + totalMidi;
    console.log(totalAllCost.toFixed(2));
    
}

// fishShop(['6.90', '4.20', '1.5', '2.5', '1']);