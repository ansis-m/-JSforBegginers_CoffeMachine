
const input = require('sync-input');

function main() {

    console.log("Write how many ml of water the coffee machine has:");
    let water = Number(input());

    console.log("Write how many ml of milk the coffee machine has:");
    let milk = Number(input());

    console.log("Write how many grams of coffee beans the coffee machine has:");
    let beans = Number(input());


    console.log("Write how many cups of coffee you will need:");

    let amount = new Number();

    while(true) {
        amount = Number(input());
        if (isNaN(amount) || amount < 0)
            console.log("Enter a positive number!");
        else
            break;
    }


    let possibleCups = Math.min(~~(water/200), ~~(milk/50), ~~(beans/15));

    if (amount > possibleCups)
        console.log(`No, I can make only ${possibleCups} cups of coffee`);
    else if (amount == possibleCups)
        console.log(`Yes, I can make that amount of coffee`);
    else if (amount < possibleCups)
        console.log(`Yes, I can make that amount of coffee (and even ${possibleCups - amount} more than that)`);

}

main();

