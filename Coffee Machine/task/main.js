
const input = require('sync-input');

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;

function printStatus(){
    console.log("The coffee machine has:\n" +
        `${water} ml of water\n` +
        `${milk} ml of milk\n` +
        `${beans} g of coffee beans\n` +
        `${cups} disposable cups\n` +
        `$${money} of money`);
}


function buy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    let coffe = input();
    switch (coffe){
        case("1"):
            water -= 250;
            beans -= 16;
            money += 4;
            cups -= 1;
            break;
        case("2"):
            water -= 350;
            milk -= 75;
            beans -= 20;
            money += 7;
            cups -= 1;
            break;
        case("3"):
            water -= 200;
            milk -= 100;
            beans -= 12;
            money += 6;
            cups -= 1;
            break;
    }
}

function fill() {
    console.log("Write how many ml of water you want to add:");
    water += Number(input());
    console.log("Write how many ml of milk you want to add:");
    milk += Number(input());
    console.log("Write how many grams of coffee beans you want to add:");
    beans += Number(input());
    console.log("Write how many disposable cups you want to add:");
    cups += Number(input());
}

function take() {
    console.log(`I gave you $${money}\n`);
    money = 0;
}

function main() {

    printStatus();
   let choice = new String();
   while (true) {
       console.log("\nWrite action (buy, fill, take):");
       choice = input();
       if (["buy", "fill", "take"].includes(choice))
           break;
   }

   switch (choice) {
       case ("buy"):
           buy();
           break;
       case("fill"):
           fill();
           break;
       case("take"):
           take();
           break;
   }

   printStatus();
}

main();

