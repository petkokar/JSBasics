function logistics(input) {
    let loadsCount = Number(input[0]);

    let totalTonnage = 0;
    let tonBus = 0;
    let tonTruck = 0;
    let tonTrain = 0;
    let busPercentage = 0;
    let truckPercentage = 0;
    let trainPercentage = 0;

    for (let i = 1; i <= loadsCount; i++) {
        let tonnagesType = Number(input[i]);
        totalTonnage += tonnagesType;

        if (tonnagesType <= 3) {
            tonBus += tonnagesType;
        } else if (tonnagesType >= 4 && tonnagesType <= 11) {
            tonTruck += tonnagesType;
        } else {
            tonTrain += tonnagesType;
        }


    }
    let averageCost = (tonBus * 200 + tonTruck * 175 + tonTrain * 120) / totalTonnage;
    busPercentage = tonBus / totalTonnage * 100;
    truckPercentage = tonTruck / totalTonnage * 100;
    trainPercentage = tonTrain / totalTonnage * 100;
    
    console.log(averageCost.toFixed(2));
    console.log(`${busPercentage.toFixed(2)}%`);
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);


}

// logistics(['4', '1', '5', '16', '3']);