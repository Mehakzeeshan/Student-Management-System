#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber: number =  Math.floor(10000 +  Math.random() * 90000);

let myBalance: number  = 0;

let answer = await inquirer.prompt(
    [
        {
            name: "student",
            type: "input",
            message: "Enter student name here:",
            validate: function (value) {
                if (value.trim() !== "") {
                    
                    return true

                }
                    return "Please fill in the empty value"
                
            },
        },
        {
            name: "courses",
            type: "list",
            message: "Please enter the courses enrolled",
            choices:["C++", "HTML", "Python", "Javascript", "CSS", "Typescript"]
        }
]
);


const tutionFee: {[key: string]: number} = {         // this is a static object where type defining is necessary
   
    "C++": 2500, 
    "HTML": 1500,
    "Python": 6500, 
    "Javascript": 4000, 
    "CSS": 3500, 
    "Typescript": 4500 

};

console.log(`\n Tution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`\nBalance: ${myBalance}\n`);


let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Please select your payment method",
        choices:['Bank Transfer', 'JazzCash', 'EasyPaisa', 'PayPak']
},
{
    name: "amount",
    type: "input",
    message: "Transfer Money",
    validate: function(value) {
                if (value.trim() !== "") {
                    return true
                }
                return "Please fill the empty value"
    },
}
]
);


console.log(`\n You select payment method: ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);  // parseFloat is a function that converts string into number

if (tutionFees === paymentAmount) {
    console.log(`Congratulations, You have successfully enrolled in ${answer.courses}\n`);


    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices:['View Status', 'Exit the page']

    }
])

if (ans.select === "View Status") {


    console.log('\n************************** STUDENT STATUS **************************\n');
    console.log(`STUDENT NAME: ${answer.student}`);
    console.log(`STUDENT ID: ${randomNumber}`);
    console.log(`COURSE SELECTED: ${answer.courses}`);
    console.log(`TUTUION FEES PAID: ${paymentAmount}`);
    console.log(`YOUR CURRENT BALANCE: ${myBalance += paymentAmount}`);
    

} else {
    console.log("Exiting student management system\n");
    
}

} else {
    console.log("Invalid amount entered \n");
};
