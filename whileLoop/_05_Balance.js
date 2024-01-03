function balance(input) {
    let command = input[0];
    let total = 0;

    let index = 1;

    while(command !== 'NoMoreMoney'){
        let sum = Number(command);

        if (sum < 0) {
            console.log('Invalid operation!');
            break;
        }
        total += sum;

        console.log(`Increase: ${sum.toFixed(2)}`);

        command = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);

}

// balance(["5.51", "69.42","100", "NoMoreMoney"]);