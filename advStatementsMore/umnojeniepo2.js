function umnojenie(input){
    let index = 0;

    while (true) {
        let num = Number(input[index]);
        num = num * 2;
        index++;
        if (num < 0){
            console.log('Negative number!');
            break;
        }
        console.log(`Result: ${num.toFixed(2)}`);
    }

}

// umnojenie(['12', '43.2144', '12.3', '543.23', '-20']);
