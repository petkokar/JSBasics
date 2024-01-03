function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let tankVolume = length * width * height;
    let volumeToLiters = tankVolume / 1000;
    let occupiedSpace = percent / 100
    
    let neededLiters = volumeToLiters * (1 - occupiedSpace);
    console.log(neededLiters);


}

// fishTank(["85","75","47","17"]);