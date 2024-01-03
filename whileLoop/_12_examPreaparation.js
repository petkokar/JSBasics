function examPreparation(input) {
    let badGradesAllowed = Number(input[0]);
    let index = 1;
    let allBadGrades = 0;
    let allGradesSum = 0;
    let lastTaskName = '';

    while (input[index] !== 'Enough') {
        let currentTaskName = input[index];
        let currentGrade = Number(input[index + 1]);

        lastTaskName = currentTaskName;
        allGradesSum += currentGrade;

        if (currentGrade <= 4) {
            allBadGrades += 1;
        }

        if (allBadGrades >= badGradesAllowed) {
            break;
        }

        index += 2;
    }

    if (allBadGrades >= badGradesAllowed) {
        console.log(`You need a break, ${allBadGrades} poor grades.`);

    } else {
        console.log(`Average score: ${(allGradesSum / ((index - 1) / 2)).toFixed(2)}`);
        console.log(`Number of problems: ${((index - 1) / 2)}`);
        console.log(`Last problem: ${lastTaskName}`);

    }

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);