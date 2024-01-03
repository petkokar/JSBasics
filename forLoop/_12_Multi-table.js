function multiTable(input){
    let number = Number(input[0]);

    for (let i = 1; i <= 10; i += 1){
        console.log(`${i} * ${number} = ${i * number}`);
    }
}

// multiTable(['5']);