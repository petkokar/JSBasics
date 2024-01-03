function testOnTime(input){
    let hourTestStart = Number(input[0]);
    let minuteTestStart = Number(input[1]);
    let studentArrivalHour = Number(input[2]);
    let studentArrivalMinute = Number(input[3]);

    let hourTestStartInMins = hourTestStart * 60;
    let studentArrivalHourinMins = studentArrivalHour * 60;

    let totalTestStartMinutes =  hourTestStartInMins + minuteTestStart;
    let totalStudentArrivalMinutes = studentArrivalHourinMins + studentArrivalMinute;

    if (totalTestStartMinutes === totalStudentArrivalMinutes) {
        console.log('On time');
    } else if (totalTestStartMinutes < totalStudentArrivalMinutes) {
        console.log('Late');
        let difference = totalStudentArrivalMinutes - totalTestStartMinutes;
        if (difference < 60){
            console.log(`${difference} minutes after the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hours}:${minutes} hours after the start`);
        }
    } else if (totalStudentArrivalMinutes + 30 < totalTestStartMinutes){
        console.log('Early');
        let difference = Math.abs(totalStudentArrivalMinutes - totalTestStartMinutes);
        if (difference < 60){
            console.log(`${difference} minutes before the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hours}:${minutes} hours before the start`);
        }
    } else {
        console.log('On time');
        let difference = Math.abs(totalStudentArrivalMinutes - totalTestStartMinutes);
        if (difference < 60){
            console.log(`${difference} minutes before the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hours}:${minutes} hours before the start`);
        }
    }
}


// testOnTime(["9", "30", "9", "50"]);