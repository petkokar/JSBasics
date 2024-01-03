function solve(input) {
    let packageMass = Number(input[0]);
    let serviceType = input[1];
    let distance = Number(input[2]);

    let shipmentPrice = 0;
    let markUp = 0;
    let totalMarkUp = 0;
    let finalPrice = 0;
    

    switch(serviceType) {
        case 'standard':
            if (packageMass < 1) {
                shipmentPrice = 0.03;
            } else if (packageMass >= 1 && packageMass < 10) {
                shipmentPrice = 0.05;
            } else if (packageMass >= 10 && packageMass < 40) {
                shipmentPrice = 0.10;
            } else if (packageMass >= 40 && packageMass < 90) {
                shipmentPrice = 0.15;
            } else if (packageMass >= 90 && packageMass <150) {
                shipmentPrice = 0.20;
            }
            finalPrice = distance * shipmentPrice;
            break;
        case 'express':
            if (packageMass < 1) {
                shipmentPrice = distance * 0.03;
                markUp = ((0.03 * 0.8) * packageMass);
                totalMarkUp = distance * markUp;
            } else if (packageMass >= 1 && packageMass < 10) {
                shipmentPrice = distance * 0.05;
                markUp = ((0.05 * 0.4) * packageMass);
                totalMarkUp = distance * markUp;
            } else if (packageMass >= 10 && packageMass < 40) {
                shipmentPrice = distance * 0.10;
                markUp = ((0.10 * 0.05) * packageMass);
                totalMarkUp = distance * markUp;
            } else if (packageMass >= 40 && packageMass < 90) {
                shipmentPrice = distance * 0.15;
                markUp = ((0.15 * 0.02) * packageMass);
                totalMarkUp = distance * markUp;
            } else if (packageMass >= 90 && packageMass <150) {
                shipmentPrice = distance * 0.20;
                markUp = ((0.20 * 0.01) * packageMass);
                totalMarkUp = distance * markUp;
            }
            finalPrice = shipmentPrice + totalMarkUp;
           break;
    }

    console.log(`The delivery of your shipment with weight of ${packageMass.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);

}

solve(["20", 
"standard",
"349"])
;