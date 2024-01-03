function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let srok = Number(input[1]);
    let percentPerYear = Number(input[2]);

    let amount = depositAmount + srok * ((depositAmount * (percentPerYear / 100))/12);

    console.log(amount);
}
// depositCalculator(["200 ", "3 ", "5.7"]);