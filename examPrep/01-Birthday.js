function solve(input) {

    let rentHallPrice = Number(input[0]);

    let cakePrice = rentHallPrice * 0.2;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animatorPrice = rentHallPrice / 3;

    let sumAll = rentHallPrice + cakePrice + drinksPrice + animatorPrice;

    console.log(sumAll);

}

// solve(['2250']);