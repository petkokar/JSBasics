function lunchBreak (input) {
    let movieName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let otdihTime = breakTime / 4;

    let freeTime = breakTime - lunchTime - otdihTime;

    if (freeTime >= episodeTime) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(freeTime - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(episodeTime - freeTime)} more minutes.`);
    }
}

// lunchBreak(["Game of Thrones", "60", "96"]);