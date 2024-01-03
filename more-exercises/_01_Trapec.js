function trapeziusArea(input){
    let sideA = Number(input[0]);
    let sideB = Number(input[1]);
    let height = Number(input[2]);

    let area = ((sideA + sideB) * height / 2).toFixed(2);

    console.log(area);
    

}

trapeziusArea(['8', '13', '7']);