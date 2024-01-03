function convertor(input){
    let temperatureCelsius = Number(input[0]);

    let Farenhait = ((temperatureCelsius * 1.8) + 32).toFixed(2);
    
    return Farenhait;

}

convertor(['25']);