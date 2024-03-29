function hotelRoom(input){
    let month = input[0];
    let nightsCount = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch(month){
        case 'May':
        case 'October':
            studioPrice = nightsCount * 50;
            apartmentPrice = nightsCount * 65;
            if (nightsCount > 7 && nightsCount <=14){
                studioPrice -= studioPrice * 0.05;
            } else if (nightsCount > 14){
                studioPrice -= studioPrice * 0.3;
            }
        break;
        case 'June':
        case 'September':
            studioPrice = nightsCount * 75.20;
            apartmentPrice = nightsCount * 68.70;
            if (nightsCount > 14){
                studioPrice -= studioPrice * 0.2;
            }
        break;
        case 'July':
        case 'August':
            studioPrice = nightsCount * 76;
            apartmentPrice = nightsCount * 77;
        break; 
    }
    if (nightsCount > 14){
        apartmentPrice -= apartmentPrice * 0.1;
    }
    console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);

}

// hotelRoom(["May", "15"]);