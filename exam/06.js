function solve(input){
    let num = input[0];

    let num1 = Number(num[2]);
    let num2 = Number(num[1]);
    let num3 = Number(num[0]);

    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= num2; j++) {
            for (let k = 1; k <= num3; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k}`);
            }
        }
    }
}

solve(['324']);