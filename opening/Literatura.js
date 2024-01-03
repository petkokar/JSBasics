function literatura(input) {
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    console.log((pagesCount / pagesPerHour) / daysCount);

}
// literatura(["212", "20 ", "2"]);
