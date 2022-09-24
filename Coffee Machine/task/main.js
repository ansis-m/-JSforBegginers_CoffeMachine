
const input = require('sync-input');

function main() {
    console.log("Write how many cups of coffee you will need:");

    let amount = new Number();

    while(true) {
        amount = Number(input());
        if (isNaN(amount) || amount < 0)
            console.log("Enter a positive number!");
        else
            break;
    }

    console.log(`For ${amount} cups of coffee you will need:`)
    console.log(`${amount * 200} ml of water\n${amount * 50} ml of milk\n${amount * 15} g of coffee beans`)

}

main();

