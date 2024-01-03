function timePlusFiveteen(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let hoursInMinutes = hours * 60;
    let fullTime = hoursInMinutes + minutes;
    let fullTimePlusBonus = fullTime + 15;

    let outputHours = Math.floor(fullTimePlusBonus / 60);
    let outputMinutes = fullTimePlusBonus % 60;

    if (outputHours === 24) {
        outputHours = 0;
    }
    if (outputMinutes < 10) {
        console.log(`${outputHours}:0${outputMinutes}`);
    } else {
        console.log(`${outputHours}:${outputMinutes}`);
    }


}

// timePlusFiveteen(["1", "46"]);