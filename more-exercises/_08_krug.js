function circle(input){
    let radius = Number(input[0]);

    let area = Math.PI * radius **2;
    let parameter = 2 * Math.PI * radius;

    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));

}

// circle(['3']);