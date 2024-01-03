function trekking(input){
    let groupsCount = Number(input[0]);

    let musalaCount = 0;
    let montblancCount = 0;
    let kilimanjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    let allClimbers = 0;

    for (let i = 1; i <= groupsCount; i += 1){
        let currentGroupCount = Number(input[i]);
        allClimbers += currentGroupCount;

        if (currentGroupCount <= 5){
            musalaCount += currentGroupCount;
        } else if (currentGroupCount <= 12) {
            montblancCount += currentGroupCount;
        } else if (currentGroupCount <= 25){
            kilimanjaroCount += currentGroupCount;
        } else if (currentGroupCount <= 40) {
            k2Count += currentGroupCount;
        } else {
            everestCount += currentGroupCount;
        }
    }
    console.log(`${((musalaCount / allClimbers)* 100).toFixed(2)}%`);
    console.log(`${((montblancCount / allClimbers)* 100).toFixed(2)}%`);
    console.log(`${((kilimanjaroCount / allClimbers)* 100).toFixed(2)}%`);
    console.log(`${((k2Count / allClimbers)* 100).toFixed(2)}%`);
    console.log(`${((everestCount / allClimbers)* 100).toFixed(2)}%`);

}

trekking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);