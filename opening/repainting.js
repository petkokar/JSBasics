function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workersHours = Number(input[3]);

    let nylonCost = (nylon + 2) * 1.5;
    let paintCost = (paint + (paint * 0.1)) * 14.5;
    let thinnerCost = thinner * 5;
    let bagsCost = 0.4;

    let totalMaterialsPrice = nylonCost + paintCost + thinnerCost + bagsCost;
    // console.log(totalMaterialsPrice);
    let workersPrice = (totalMaterialsPrice * 0.3) * workersHours;
    let allTotal = totalMaterialsPrice + workersPrice;

    console.log(allTotal);

}
// repainting(["10","11","4","8"]);