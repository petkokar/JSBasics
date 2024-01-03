function veloSustezanie(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let traceType = input[2];

    let juniorsParticipationPrice = 0;
    let seniorsParticipationPrice = 0;

    let sumAll = 0;
    let expenses = 0;

    switch(traceType){
        case 'trail':
            juniorsParticipationPrice += 5.50;
            seniorsParticipationPrice += 7;
            sumAll += juniorsParticipationPrice * juniorsCount;
            sumAll += seniorsParticipationPrice * seniorsCount;
            break;
        case 'cross-country':
            juniorsParticipationPrice += 8;
            seniorsParticipationPrice += 9.5;
            sumAll += juniorsParticipationPrice * juniorsCount;
            sumAll += seniorsParticipationPrice * seniorsCount;
            
            if ((juniorsCount + seniorsCount) >= 50) {
                sumAll -= sumAll * 0.25;
            }
            break;
        case 'downhill':
            juniorsParticipationPrice += 12.25;
            seniorsParticipationPrice += 13.75;
            sumAll += juniorsParticipationPrice * juniorsCount;
            sumAll += seniorsParticipationPrice * seniorsCount;
            break;
        case 'road':
            juniorsParticipationPrice += 20;
            seniorsParticipationPrice += 21.5;
            sumAll += juniorsParticipationPrice * juniorsCount;
            sumAll += seniorsParticipationPrice * seniorsCount;
            break;
    }
    
    expenses += sumAll * 0.05;

    console.log((sumAll - expenses).toFixed(2));

}

// veloSustezanie(['10', '20', 'trail']);