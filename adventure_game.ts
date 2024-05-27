import { match } from "assert";
import { Console } from "console";
import inquirer from "inquirer"; 
import chalk from "chalk";

//--------------------------game variable-------------------

let enemies = ["skeleton", "zombie", "warrior", "Monster"];
let maxenemyhealth = 75
let enemyattackdamagetohero = 25 

//--------------------------player variable-------------------


let herohealth = 100
let enemydamagetoenemy = 50
let numhealthpostion = 3
let healthPotionhealamount = 30
let healthPotiondropchance = 50

//--------------------------while loop -------------------

let gamerunning = true

console.log("welcome to deadzone");

game: 
while (gamerunning) {
    let enemyhealth = Math.floor(Math.random() * maxenemyhealth + 1);
    let enemyindex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyindex]

    console.log(` # ${enemy} has appeared # \n`);

    while (enemyhealth > 0){
        console.log(`your health ${herohealth}`);
        console.log(`${enemy} health: ${enemyhealth}`);

        let option = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "what would you like to do?",
            choices: ["1. attack", "2. take health potion", "3. Run"]
        })
        // attack option 

    if(option.ans === "1. attack"){
        let attackdamagetoenemy = 50
        let damagetoenemy = Math.floor(Math.random() * attackdamagetoenemy + 1)
        let damagetohero = Math.floor(Math.random() * enemyattackdamagetohero + 1);

        enemyhealth -= damagetoenemy
        herohealth -= damagetohero

        console.log(chalk.green `you stike the ${enemy} for ${damagetoenemy}`);
        console.log(chalk.blueBright`${enemy} strike you for ${damagetohero} damage.`);
        
        if(herohealth < 1){
            console.log("you have taken too much damage. you are too weak to continue.");
            break;
        }
    }
    // option 2 take health potion

    else if(option.ans === "2. take health potion"){
        if(numhealthpostion > 0 ){
herohealth += healthPotionhealamount
numhealthpostion -- 
console.log(`you use health potion for ${healthPotionhealamount}`);
console.log(`you now have ${herohealth} health`);
console.log(`you have ${numhealthpostion} health potions left`);
    }
    else {console.log(`you have no health potions left. defeat enemy for a chance get health potion`);
            }}

            else if (option.abs == "3. Run")
                console.log(chalk.redBright`you run away from ${enemy}`);
            continue game;       
    }

    if (herohealth < 1){
        console.log(`you are out from battle. you are too weak`);
        break 
    }
    
    console.log(chalk.bgYellow`${enemies} was defected`);
    console.log(chalk.bgCyanBright`you have ${herohealth} health.`);

    let randomnumber =Math.floor(Math.random() * 100 + 1)
    if(randomnumber < healthPotiondropchance ) {
        numhealthpostion++

        console.log(`enemy give you health potion`);
console.log(chalk.arguments`your health is ${herohealth}`);
console.log(chalk.bgBlackBright`your healt potion is ${numhealthpostion}`);
    }
    let useroption = await inquirer.prompt ({
        name : "ans",
        type : "list",
        message: "what would you like to do now",
        choices: ["1. continue", "2. Exit"]
    })
    if (useroption.ans === "1. continue"){
        console.log("you are continue on your advanture");
            }else {
                console.log("you succesfully exit from deadzone");
                break;
            }
            console.log("thanks for your playing.\n");
}


