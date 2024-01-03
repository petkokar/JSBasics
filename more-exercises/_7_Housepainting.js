function housePainting(input){
    let xHouseHeight = Number(input[0]);
    let ySideLength = Number(input[1]);
    let hSideTriangle = Number(input[2]);

    let consumptionGreenPaint = 3.4;
    let consumptionRedPaint = 4.3;
    let frontSideDoorArea = 1.2 * 2;
    let windowArea = 1.5 * 1.5;

    let frontAndBackSideArea = 2 * (xHouseHeight * xHouseHeight) - (frontSideDoorArea);
    let sidesArea = 2 * (xHouseHeight * ySideLength) - (2 * windowArea);

    let totalSidesArea = frontAndBackSideArea + sidesArea;
    console.log((totalSidesArea / consumptionGreenPaint).toFixed(2));

    let roofRectanglesArea = 2 * (xHouseHeight * ySideLength);
    let roofTrianglesArea = 2 * ((xHouseHeight * hSideTriangle) / 2);
    let totalRoofArea = roofRectanglesArea + roofTrianglesArea;

    console.log((totalRoofArea / consumptionRedPaint).toFixed(2));

}

// housePainting(['6', '10', '5.2']);