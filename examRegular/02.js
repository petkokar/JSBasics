function solve(input) {
    let processorsToBeProduced = Number(input[0]);
    let workersCount = Number(input[1]);
    let workDays = Number(input[2]);

    let workTimeHours = 8;
    let timeProduceProcessor = 3;
    let processorPrice = 110.10;

    let totalWorkTimeForWorkDays = workersCount * workDays * workTimeHours;
    let totalProducedProcessors = Math.floor(totalWorkTimeForWorkDays / timeProduceProcessor);

    if (totalProducedProcessors >= processorsToBeProduced) {
        let profit = (totalProducedProcessors - processorsToBeProduced) * processorPrice;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    } else {
        let loses = (processorsToBeProduced - totalProducedProcessors) * processorPrice;
        console.log(`Losses: -> ${loses.toFixed(2)} BGN`);
    }
}

// solve (['500', '8', '20']);