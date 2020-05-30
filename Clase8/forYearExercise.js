let yearsArray = [2020, 2052, 2400, 2100, 1920, 2200, 3000, 1223];

// Es biciesto si es divisible por 400  o sea divisible por 4 pero no por 100


for (i = 0; i < yearsArray.length; i++) {
    let actualYearInTheBucle = yearsArray[i];


    if (actualYearInTheBucle % 400 === 0 || (actualYearInTheBucle % 4 === 0 && actualYearInTheBucle % 100 != 0)) {
        console.log(`El año ${actualYearInTheBucle} es biciesto`);
    } else {
        console.log(`El año ${actualYearInTheBucle} no es biciesto`);
    }
}