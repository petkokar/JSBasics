function clock(){
    for (let hour = 0; hour <=23; hour++) {
        for (let mins = 0; mins <=59; mins++) {
            if (hour < 10 || mins < 10){
                console.log(`0${hour}:0${mins}`);   
            }
        }
    }

}

clock();