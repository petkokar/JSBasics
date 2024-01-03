function sumSecs(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let fullTime = first + second + third;
    let minutes = Math.floor (fullTime / 60);
    let seconds = fullTime % 60;
    
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
    

}
// sumSecs(["35", "45", "44"])