//function to calculate sum of two numbers
import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let a,b;

rl.question('Enter the first number: ', (inputA) => {
    a = parseFloat(inputA);

    rl.question('Enter the second number: ', (inputB) => {
        b = parseFloat(inputB);

        function sum(num1, num2){
            return num1 + num2;
        } 
        console.log(sum(a,b))

        rl.close();
    })
})