
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
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
    let coffe = input();
    switch (coffe){
        case("1"):
            if (!(water >= 250 && beans >= 16 && cups > 0)){
                if(water < 250)
                    console.log("Sorry, not enough water!");
                else if(beans < 16)
                    console.log("Sorry, not enough beans!");
                else if(cups < 1)
                    console.log("Sorry, not enough cups!");
                return;
            }
            console.log("I have enough resources, making you a coffee!");
            water -= 250;
            beans -= 16;
            money += 4;
            cups -= 1;
            break;
        case("2"):
            if (!(water >= 350 && milk >= 75 && beans >= 20 && cups > 0)){
                if(water < 350)
                    console.log("Sorry, not enough water!");
                else if(milk < 75)
                    console.log("Sorry, not enough milk!");
                else if(beans < 20)
                    console.log("Sorry, not enough beans!");
                else if(cups < 1)
                    console.log("Sorry, not enough cups!");
                return;
            }
            console.log("I have enough resources, making you a coffee!");
            water -= 350;
            milk -= 75;
            beans -= 20;
            money += 7;
            cups -= 1;
            break;
        case("3"):
            if (!(water >= 200 && milk >= 100 && beans >= 12 && cups > 0)){
                if(water < 200)
                    console.log("Sorry, not enough water!");
                else if(milk < 100)
                    console.log("Sorry, not enough milk!");
                else if(beans < 12)
                    console.log("Sorry, not enough beans!");
                else if(cups < 1)
                    console.log("Sorry, not enough cups!");
                return;
            }
            console.log("I have enough resources, making you a coffee!");
            water -= 200;
            milk -= 100;
            beans -= 12;
            money += 6;
            cups -= 1;
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
       if (choice == "exit")
           break;
       else if (["buy", "fill", "take", "remaining"].includes(choice))
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

