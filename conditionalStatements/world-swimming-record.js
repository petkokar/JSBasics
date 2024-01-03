function worldSwimmingRecord (input) {
    let currentRecordInSeconds = Number(input[0]);
    let meters = Number(input[1]);
    let timeInSecondsForAMeterSwimming = Number(input[2]);

    let slow = Math.floor(meters / 15) * 12.5;
    let clearTimeOfSwimming = meters * timeInSecondsForAMeterSwimming;
    let fulltimeOfSwimming = clearTimeOfSwimming + slow;

    if (fulltimeOfSwimming >= currentRecordInSeconds) {
        console.log(`No, he failed! He was ${(fulltimeOfSwimming - currentRecordInSeconds).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${fulltimeOfSwimming.toFixed(2)} seconds.`);
    
    }
}

// worldSwimmingRecord(["10464", "1500", "20"]);