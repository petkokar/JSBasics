function speedHiking(input) {
    let recordToBeat = Number(input[0]);
    let lengthInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let hisRawTime = lengthInMeters * secondsPerMeter;
    let delayTimeSeconds = (Math.floor(lengthInMeters / 50)) * 30;
    let totalTime = (hisRawTime + delayTimeSeconds);

    if (totalTime < recordToBeat) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - recordToBeat).toFixed(2)} seconds slower.`);
    }

}

// speedHiking(['5554.36', '1340', '3.23']);