function tomCat(input) {
    let restDaysCount = Number(input[0]);

    let tomGameStandartForYear = 30000;
    let ownerPlayTimeWorkDays = 63;
    let ownerPlayTimeWeekends = 127;
    let yearDaysCount = 365;
    let workDaysPerYear = yearDaysCount - restDaysCount;

    let realPlayTime = (workDaysPerYear * ownerPlayTimeWorkDays) + (restDaysCount * ownerPlayTimeWeekends);
    let differenceFromStandart = tomGameStandartForYear - realPlayTime;

    let minutes = Math.abs(differenceFromStandart % 60);
    let hours = Math.abs(differenceFromStandart / 60);
    
    if(tomGameStandartForYear > realPlayTime) {
        console.log('Tom sleeps well');
        console.log(`${Math.floor(hours)} hours and ${minutes} minutes less for play`);
    } else {
        console.log('Tom will run away');
        console.log(`${Math.floor(hours)} hours and ${minutes} minutes more for play`);
    }
}

// tomCat(['113']);