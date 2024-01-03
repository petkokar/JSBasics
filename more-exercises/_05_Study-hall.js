function studyHall(input){
    let lengthInMeters = Number(input[0]);
    let widthInMeters = Number(input[1]);

    let lengthInCantimeters = lengthInMeters * 100;
    let widthInCantimeters = widthInMeters * 100;
    let workPlaceWidth = 70;
    let workPlaceLength = 120;
    let corridorWidth = 100;
    let lostSpots = 3;

    let availableWidth = widthInCantimeters - corridorWidth;

    let deskCount = Math.floor(availableWidth / workPlaceWidth);
    let rowCount = Math.floor(lengthInCantimeters / workPlaceLength);

    let totalSpotsCount = (deskCount * rowCount) - lostSpots;
    
    console.log(totalSpotsCount);
    
}

// studyHall(['15', '8.9']);