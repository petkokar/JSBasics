function transportPrice(input) {
    let totalKm = Number(input[0]);
    let dayOrNight = input[1];

    let taxiStartPrice = 0.7;
    let taxiDayPricePerKm = 0.79;
    let taxiNightPricePerKm = 0.9;
    let busPricePerKm = 0.09;
    let trainPricePerKm = 0.06;

    if (totalKm < 20 ) {
        if (dayOrNight === 'day') {
            console.log((taxiStartPrice + totalKm * taxiDayPricePerKm).toFixed(2));
        } else {
            console.log((taxiStartPrice + totalKm * taxiNightPricePerKm).toFixed(2));
        }
    } else if (totalKm >= 20 && totalKm < 100){
        console.log((totalKm * busPricePerKm).toFixed(2));
    } else {
        console.log((totalKm * trainPricePerKm).toFixed(2));
    }

}

// transportPrice(['5', 'day']);