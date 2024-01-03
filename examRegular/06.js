function solve(input) {
    let locationsCount = Number(input[0]);
    let index = 1;

    while (locationsCount > 0) {
        let expectedGold = Number(input[index]);
        let miningDays = Number(input[index + 1]);
        let dayCount = 0;
        let Dig1 = 0;
        while (miningDays > 0) {
        let currDig = Number(input[index + 2]);
           Dig1 += currDig;
           

           index += 1;
           miningDays--;
           dayCount++;
        }
        let avgDig = Dig1 / dayCount;
        if (avgDig >= expectedGold) {
            console.log(`Good job! Average gold per day: ${avgDig.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedGold - avgDig).toFixed(2)} gold.`); 
        } 
        locationsCount--;
        index += 2;
    }

}

solve(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"]);
