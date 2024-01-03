function moving(input) {
    let widthFreeSpace = Number(input[0]);
    let heightFreeSpace = Number(input[1]);
    let lengthFreeSpace = Number(input[2]);

    let totalFreeSpace = widthFreeSpace * heightFreeSpace * lengthFreeSpace;
    let usedSize = 0;
    let index = 3;

    while (usedSize < totalFreeSpace){
        if(input[index] === 'Done') {
            break;
        }

        usedSize += Number(input[index]);

        index += 1;
    }

    if(usedSize < totalFreeSpace) {
        console.log(`${totalFreeSpace - usedSize} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${usedSize - totalFreeSpace} Cubic meters more.`);
    }
}

// moving(['10', '10', '2', '20', '20', '20', '20', '122']);