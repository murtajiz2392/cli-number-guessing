#! /usr/bin/enov node
import inquirer from 'inquirer';

console.log("welcom to codewithafza - CLI Number Guessing Game");

const systemGeneratedNo = Math.floor(Math.random()* 10);

type ansType = {
    userGuess: number
}


const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess b/w 1 to 10:"
    }
])

const{userGuess} = answers;
console.log(userGuess,"userGyess",systemGeneratedNo,'GYs')
if(userGuess === systemGeneratedNo){
    console.log("yup your answer is correct /n you win!")
}else{
    console.log("please try again!")
}