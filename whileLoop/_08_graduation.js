function graduation(input) {
    let student = input[0];

    let year = 1;
    let index = 1;
    let failCount = 0;
    let gradesSum = 0;

    while (year <= 12) {
        let grade = Number(input[index]);
        index++;

        gradesSum += grade;

        if(grade < 4){
            failCount += 1;
            
            if (failCount > 1) {
                break;
            }
        }
        year++;
    }
    if (failCount > 1) {
        console.log(`${student} has been excluded at ${year - 1} grade`);
    } else {
        let avgGrade = gradesSum / 12;
        console.log(`${student} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

// graduation(["Gosho", "5", "5.5", "6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);