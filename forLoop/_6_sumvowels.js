function sumVowels(input){
    let text = input[0];
    let vowelsSum = 0;

    for(let i = 0; i < text.length; i++){
        let curChar = text.charAt(i);

        switch(curChar) {
            case 'a':
                vowelsSum += 1;
                break;
            case 'e':
                vowelsSum += 2;
                break;
            case 'i':
                vowelsSum += 3;
                break;
            case 'o':
                vowelsSum += 4;
                break;
            case 'u':
                vowelsSum += 5;
                break;
        }
    }
    console.log(vowelsSum);

}

sumVowels(['hello']);