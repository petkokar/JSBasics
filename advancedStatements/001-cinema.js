function cinemaTickets(input){
    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    let totalSeats = rows * columns;

    switch(projection){
        case 'Premiere':
            income = totalSeats * 12.00;
            break;
        case 'Normal':
            income = totalSeats * 7.50;
            break;
        case 'Discount':
            income = totalSeats * 5.00;
            break;
        }
        console.log(`${income.toFixed(2)} leva`);

}

// cinemaTickets(['Premiere', '10', '12']);