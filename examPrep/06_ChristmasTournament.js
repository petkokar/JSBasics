function christmasTournament(input) {
    let daysCount = Number(input[0]);
    let dayWin = 0;
    let dayLose = 0;
    let total = 0;
    let index = 1;

    for (let day = 1; day <= daysCount; day++) {
        let win = 0;
        let lose = 0;
        let currMoney = 0;
        while (input[index] !== 'Finish') {
            let sportType = input[index];
            let currResult = input[index + 1];

            if (currResult === 'win') {
                currMoney += 20;
                win++;
            } else if (currResult === 'lose') {
                lose++;
            }

            index += 2;
        }

        if (win > lose) {
            total += currMoney * 1.1;
            dayWin++;
        } else {
            total += currMoney;
            dayLose++;
        }
        index++;
    }

    if (dayWin > dayLose) {
        total *= 1.2;
        console.log(`You won the tournament! Total raised money: ${total.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${total.toFixed(2)}`);
        
    }

}

christmasTournament(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);