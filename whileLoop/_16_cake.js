function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let currMissinParts = 0;

    let cakeSize = cakeLength * cakeWidth;

    let index = 2;

    while (currMissinParts < cakeSize) {
        if (input[index] === 'STOP') {
            break;
        }

        currMissinParts += Number(input[index]);
        index += 1;
    }

    if (currMissinParts < cakeSize) {
        console.log(`${cakeSize - currMissinParts} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${currMissinParts - cakeSize} pieces more.`);
    }

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);
