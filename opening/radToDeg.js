function radToDeg(inputArray){
    let radians = Number(inputArray[0]);
    let deg = radians * 180 / Math.PI;
    console.log(deg);
}

// radToDeg(["3.1416"]);