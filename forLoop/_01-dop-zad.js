function backInTime(input) {
    let hisMoney = Number(input[0]);
    let lastYear = Number(input[1]);

    let ivanchoYearsOld = 18;

    for (let yearStart = 1800; yearStart <= lastYear; yearStart += 1 ){
        let isEven1 = yearStart % 2 === 0;
        if (yearStart > 1800){
            ivanchoYearsOld +=1
        }

        if (isEven1) {
            hisMoney -= 12000;
        } else {
            hisMoney -= (12000 + (50 * ivanchoYearsOld));
        }
    }

    if (hisMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${(hisMoney).toFixed(2)} dollars left.`); 
    } else {
        console.log(`He will need ${Math.abs(hisMoney).toFixed(2)} dollars to survive.`);
    }


}

// backInTime(['100000.15', '1808']);