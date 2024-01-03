function holiday(input){
    let budget = Number(input[0]);
    let seasonType = input[1];
    let sleepType;

    let holidayCost = 0;

    if (budget <= 100){
        destination = 'Bulgaria';
        if (seasonType === "summer"){
            holidayCost = budget * 0.3;
        } else {
            holidayCost = budget * 0.7;
        }
    } else if (budget > 100 && budget <= 1000){
        destination = 'Balkans';
        if (seasonType === 'summer'){
            holidayCost = budget * 0.4;
        } else {
            holidayCost = budget * 0.8;
    } 
    } else {
        destination = 'Europe'; 
        holidayCost = budget * 0.9;
    }

    if (seasonType === 'summer' && destination !== 'Europe'){
        sleepType = 'Camp';
    console.log(`Somewhere in ${destination}`);
    console.log(`${sleepType} - ${holidayCost.toFixed(2)}`);
    } else {
        sleepType = 'Hotel';
    console.log(`Somewhere in ${destination}`);
    console.log(`${sleepType} - ${holidayCost.toFixed(2)}`);
    }
    
}


// holiday(['1500', 'summer']);