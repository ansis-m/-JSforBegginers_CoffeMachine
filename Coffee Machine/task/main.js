
const input = require('sync-input');

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;

const espresso = [250, 0, 16, 4];
const latte = [350, 75, 20, 7];
const cappuccino = [200, 100, 12, 6];

function printStatus(){
    console.log("The coffee machine has:\n" +
        `${water} ml of water\n` +
        `${milk} ml of milk\n` +
        `${beans} g of coffee beans\n` +
        `${cups} disposable cups\n` +
        `$${money} of money`);
}

function make(coffee){
    if (!(water >= coffee[0] && milk >= coffee[1] && beans >= coffee[2] && cups > 0)){
        if(water < coffee[0])
            console.log("Sorry, not enough water!");
        if(milk < coffee[1])
            console.log("Sorry, not enough milk!");
        else if(beans < coffee[2])
            console.log("Sorry, not enough beans!");
        else if(cups < 1)
            console.log("Sorry, not enough cups!");
        return;
    }
    console.log("I have enough resources, making you a coffee!");
    water -= coffee[0];
    milk -= coffee[1];
    beans -= coffee[2];
    money += coffee[3];
    cups -= 1;
}


function buy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
    let coffee = input();
    switch (coffee){
        case("1"):
            make(espresso);
            break;
        case("2"):
            make(latte);
            break;
        case("3"):
            make(cappuccino);
            break;
        case("back"):
            return;
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

   let choice = new String();
   while (true) {
       console.log("Write action (buy, fill, take, remaining, exit):");
       choice = input();
       if (choice === "exit")
           break;
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
           case("remaining"):
               printStatus();
               break;
       }
   }
}

main();