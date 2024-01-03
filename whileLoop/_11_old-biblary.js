function oldLibrary(input){
    let favBook = input[0];
    let index = 1;
    let isFavBookFounded = false;

    while(input[index] !== 'No More Books') {
        if (input[index] === favBook) {
            isFavBookFounded = true;
            break;
        }

        index += 1;
    }

    if (isFavBookFounded) {
        console.log(`You checked ${index - 1} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    }
}

// oldLibrary(['Troy', 'Stronger', 'Life Style', 'Troy']);