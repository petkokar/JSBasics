function hospital(input){
    let daysForClients = Number(input[0]);

    let doctorsCount = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let day = 1; day < daysForClients; day += 1){
        if (day % 3 === 0){
          if(untreatedPatients > treatedPatients){
            doctorsCount += 1;
          }
        }
       let currentPatientsCount = Number(input[day]);
       if (currentPatientsCount > doctorsCount) {
        treatedPatients += doctorsCount;
        untreatedPatients += currentPatientsCount - doctorsCount;
    
       } else {
        treatedPatients += currentPatientsCount;
       }

       
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(['4', '7', '27', '9', '1']);