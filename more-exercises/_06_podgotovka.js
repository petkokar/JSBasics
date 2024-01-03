function solve(input){
    let breadsCount = Number(input[0]);

    let bestBaker = '';
    let bestGrade = 0;

    let index = 1;

    for (let curBread = 1; curBread <= breadsCount; curBread++) {
        let bakerName = input[index];
        index++;

        let command = input[index];
        index++;

        let totalGrade = 0;

        while (command !== 'Stop') {
            let grade = Number(command);

            totalGrade += grade;

            command = input[index];
            index++;
        }

        console.log( `${bakerName} has ${totalGrade} points.`);

        if (totalGrade > bestGrade) {
            console.log(`${bakerName} is the new number 1!`);
            bestBaker = bakerName;
            bestGrade = totalGrade;
        }
    }

    console.log(`${bestBaker} won competition with ${bestGrade} points!`);

}

solve(['3', 'Chef Manchev', '10', '10', '10', '10', 'Stop', 'Natalie', '8', '2', '9', 'Stop', 'George', '9', '2', '4', '2', 'Stop']);