function matchTickets(input){
    let budget = Number(input[0]);
    let categoryType = input[1];
    let groupCount = Number(input[2]);

    let transportCost = 0;
    let ticketCost = 0;

    if (groupCount >= 1 && groupCount <= 4) {
        transportCost += budget * 0.75;
    } else if (groupCount >= 5 && groupCount <= 9) {
        transportCost += budget * 0.6;
    } else if (groupCount >= 10 && groupCount <= 24) {
        transportCost += budget * 0.5;
    } else if (groupCount >= 25 && groupCount <= 49) {
        transportCost += budget * 0.4;
    } else {
        transportCost += budget * 0.25;
    }

    switch(categoryType) {
        case 'VIP':
            let vipTicketPrice = 499.99;
            ticketCost += groupCount * vipTicketPrice
            break;
        
        case 'Normal':
            let normalTicketPrice = 249.99;
            ticketCost += groupCount * normalTicketPrice
            break;
    }

    if (budget > (ticketCost + transportCost)) {
        console.log(`Yes! You have ${(budget - (ticketCost + transportCost)).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${((ticketCost + transportCost) - budget).toFixed(2)} leva.`);
    }
    
}

// matchTickets(['1000', 'Normal', '1']);