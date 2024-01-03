function sumNumbers(input){
    let num = input[0];
    let sumDigits = 0;

    for(let i = 0; i < num.length; i++){
        let curDigit = Number(num[i]);
        sumDigits += curDigit;
    }

    console.log(`The sum of the digits is:${sumDigits}`);

}

sumNumbers(['1234']);