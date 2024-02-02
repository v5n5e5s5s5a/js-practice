//Write a JavaScript program to find the largest of three given integers.
import readline from 'readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let array =[];
let large;

rl.question('Enter the first number: ', (inputA) => {
    array[0] = parseInt(inputA);

    rl.question('Enter the second number: ', (inputB) => {
        array[1] = parseInt(inputB);

        rl.question('Enter the third number: ', (inputC) => {
            array[2] = parseInt(inputC);

            large = (array) => {
                if (array[0] > array[1] && array[0] > array[2]) {
                    return (`${array[0]} is the largest`)
                }else if (array[1] > array[0] && array[1] > array[2]) {
                    return (`${array[1]} is the largest`)
                } else {
                    return (`${array[2]} is the largest`)
                }
            }
            console.log(large(array))
            rl.close()
        })
    })
})
