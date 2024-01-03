function combination(input){
    let n = Number(input[0]);
    let combinations = 0;

    for (let i = 0; i <= n; i++){
        for (j = 0; j <= n; j++){
            for (k = 0; k <= n; k++) {

                if (i + j + k === n) {
                    combinations++;
                }

            }
        }
    }

    console.log(combinations);

}

// combination(['25']);