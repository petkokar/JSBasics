function skiHoliday(input){
    let daysCount = Number(input[0]) - 1;
    let roomType = input[1];
    let rating = input[2];

    let price = 0;


    switch(roomType){
        case 'room for one person':
            price = daysCount * 18.00;
            break;
        case 'apartment':
            price = daysCount * 25.00;
            if (daysCount < 10){
                price -= price * 0.3;
            } else if (daysCount >= 10 && daysCount <= 15){
                price -= price * 0.35;
            } else {
                price -= price * 0.5;
            }
            break;
        case 'president apartment':
            price = daysCount * 35;
            if (daysCount < 10){
                price -= price * 0.1;
            } else if (daysCount >= 10 && daysCount <= 15){
                price -= price * 0.15;
            } else {
                price -= price * 0.2;
            }
            break;
    }
    switch (rating){
        case 'positive':
            price += price * 0.25;
            break;
        case 'negative':
            price -= price * 0.1;
            break;
    }
    console.log(`${price.toFixed(2)}`);

}

// skiHoliday(["14", "apartment", "positive"]);