function fillingPool(input) {
    let obemBasein = Number(input[0]);
    let firstPipeDebit = Number(input[1]);
    let secondPipeDebit = Number(input[2]);
    let workerHoursAbsent = Number(input[3]);

    let firstPipeFillingQty = firstPipeDebit * workerHoursAbsent;
    let secondPipeFillingQty = secondPipeDebit * workerHoursAbsent;

    let totalFilledQty = firstPipeFillingQty + secondPipeFillingQty;
    let poolPercentageFull = (totalFilledQty / obemBasein) * 100;
    
    let firstPipeFilledPercent = (firstPipeFillingQty / totalFilledQty) * 100;
    let secondPipeFilledPercent = (secondPipeFillingQty / totalFilledQty) * 100;
    
    if (obemBasein > totalFilledQty) { 
        console.log(`The pool is ${poolPercentageFull.toFixed(2)}% full.
         Pipe 1: ${firstPipeFilledPercent.toFixed(2)}%. Pipe 2: ${secondPipeFilledPercent.toFixed(2)}%.`);
    } else {
        console.log(`For ${workerHoursAbsent} hours the pool overflows with ${(totalFilledQty - obemBasein).toFixed(2)} liters.`);
    }

}

// fillingPool(['100', '100', '100', '2.5']);