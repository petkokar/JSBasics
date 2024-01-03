function histogram(input){
    let number = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i <= number; i += 1) {
        if (input[i] < 200) {
            p1 += 1;
        } else if (input[i] <= 399) {
            p2 += 1;
        } else if (input[i] <= 599) {
            p3 += 1;
        } else if (input[i] <= 799) {
            p4 += 1;
        } else {
            p5 += 1;
        }
    }
    console.log(`${((p1 / number) * 100).toFixed(2)}%`);
    console.log(`${((p2 / number) * 100).toFixed(2)}%`);
    console.log(`${((p3 / number) * 100).toFixed(2)}%`);
    console.log(`${((p4 / number) * 100).toFixed(2)}%`);
    console.log(`${((p5 / number) * 100).toFixed(2)}%`);

}

histogram(['3', '1', '2', '999']);