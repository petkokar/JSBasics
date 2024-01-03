// function letterCombinations(input) {

//     let startLetter = input[0].charCodeAt(0);
//     let endLetter = input[1].charCodeAt(0);
//     let exceptLetter = input[2].charCodeAt(0);

//     let combinations = 0;
//     let result = '';

//     for (i = startLetter; i <= endLetter; i++) {
        

//         for (let j = startLetter; i <= endLetter; j++) {
           

//             for (let k = startLetter; k <= endLetter; k++) {
//                 let first = String.fromCharCode(i);
//                 let second = String.fromCharCode(j);
//                 let third = String.fromCharCode(k);
//                 if (first !== exceptLetter && second !== exceptLetter && third !== exceptLetter) {

//                     combinations++;
//                     result += (first + second + third) + " ";
//                 }
//             }
//         }
//     }
//     console.log(result);

// }

// letterCombinations(['a', 'c', 'b']);

function solve(input) {
    let first = input.shift().charCodeAt(0);
    let second = input.shift().charCodeAt(0);
    let skiped = input.shift();
    let array = [];
    let count = 0;
    let g = "";

    for (let i = first; i <= second; i++) {
        for (let j = first; j <= second; j++) {
            for (let k = first; k <= second; k++) {
                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(j);
                let thirdLetter = String.fromCharCode(k);

                if (firstLetter !== skiped && secondLetter !== skiped && thirdLetter !== skiped) {

                    count++;
                    g += (firstLetter + secondLetter + thirdLetter) + " ";
                    array.push(firstLetter + secondLetter + thirdLetter);
                }
            }
        }
    }

    array.push(count);
    console.log(array.join(' '));
}