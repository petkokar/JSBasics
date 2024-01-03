function solve(input) {

    let catType = input[0];
    let sexType = input[1];

    let yearsOld = 0;

    switch (catType) {
        case 'British Shorthair':
            switch (sexType) {
                case 'm':
                    yearsOld = 13;
                    break;
                case 'f':
                    yearsOld = 14;
                    break;
            }
            break;
        case 'Siamese':
            switch (sexType) {
                case 'm':
                    yearsOld = 15;
                    break;
                case 'f':
                    yearsOld = 16;
                    break;
            }
            break;
        case 'Persian':
            switch (sexType) {
                case 'm':
                    yearsOld = 14;
                    break;
                case 'f':
                    yearsOld = 15;
                    break;
            }
            break;
        case 'Ragdoll':
            switch (sexType) {
                case 'm':
                    yearsOld = 16;
                    break;
                case 'f':
                    yearsOld = 17;
                    break;
            }
            break;
        case 'American Shorthair':
            switch (sexType) {
                case 'm':
                    yearsOld = 12;
                    break;
                case 'f':
                    yearsOld = 13;
                    break;
            }
            break;
        case 'Siberian':
            switch (sexType) {
                case 'm':
                    yearsOld = 11;
                    break;
                case 'f':
                    yearsOld = 12;
                    break;
            }
            break;
        default:
            console.log(`${catType} is invalid cat!`);
            break;
    }
    let catYearsToHumanMonths = yearsOld * 12;
    let humanMonthsToCatMonths = catYearsToHumanMonths / 6;
    if (catType === 'British Shorthair' || catType === 'Siamese' || catType === 'Persian' || catType === 'Ragdoll' || catType === 'American Shorthair' || catType === 'Siberian' ) {
    console.log(`${Math.floor(humanMonthsToCatMonths)} cat months`);
    }

}

// solve(['kur', 'm']);