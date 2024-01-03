function evenPowersOf2(input){
    let n = Number(input[0]);

    for (let exponent = 0; exponent <= n; exponent += 2){
        console.log(2 ** exponent);
    }
}

// evenPowersOf2(['6'])