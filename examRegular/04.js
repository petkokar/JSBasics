function solve (input) {

    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);

    let validNums = '';

    for (let house = M; house >= N; house--) {
        if (house % 2 === 0 && house % 3 === 0 ){
            if (S % house === 0 && S % house === 0) {
                break;
            }
            validNums += `${house} `;

        }
        
    }
    console.log(validNums);
    
    

}

// solve (['1', '36', '12']);