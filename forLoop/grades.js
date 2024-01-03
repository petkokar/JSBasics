function grades (input) {
    let studentsCount = Number(input[0]);

    let excellentGrade = 0;
    let topCount = 0;
    let veryGoodGrade = 0;
    let veryGoodCount = 0;
    let goodGrade = 0;
    let goodCount = 0;
    let poorGrade = 0;
    let poorCount = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let curGrade = Number(input[i]);

        if (curGrade >= 5) {
            excellentGrade += curGrade;
            topCount += 1;
        } else if (curGrade >= 4 && curGrade <= 4.99) {
            veryGoodGrade += curGrade;
            veryGoodCount += 1;
        } else if (curGrade >= 3 && curGrade <= 3.99) {
            goodGrade += curGrade;
            goodCount += 1;
        } else {
            poorGrade += curGrade;
            poorCount += 1;
        }
    }

    let percantageTopStudents = topCount / studentsCount * 100;
    let percantageVeryGoodStudents = veryGoodCount / studentsCount * 100;
    let percantageGoodStudents = goodCount / studentsCount * 100;
    let percantagePoorStudents = poorCount / studentsCount * 100;
    let averageSucces = (excellentGrade + veryGoodGrade + goodGrade + poorGrade) / studentsCount;
    console.log(`Top students: ${percantageTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percantageVeryGoodStudents.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percantageGoodStudents.toFixed(2)}%`);
    console.log(`Fail: ${percantagePoorStudents.toFixed(2)}%`);
    console.log(`Average: ${averageSucces.toFixed(2)}`);

}

// grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);