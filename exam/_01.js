function solve (input) {
    let rollersPaperCount = Number(input[0]);
    let rollersTailor = Number(input[1]);
    let litersGlue = Number(input[2]);
    let discount = Number(input[3]);

    let rollersPaperPrice = rollersPaperCount * 5.80;
    let rollersFabricPrice = rollersTailor * 7.20;
    let gluePrice = litersGlue * 1.20;

    let allPrice = rollersFabricPrice + rollersPaperPrice + gluePrice;

    let totalPrice = allPrice - (allPrice * (discount / 100));

    console.log(totalPrice.toFixed(3));

}

// solve(['2', '3', '2.5', '25']);