//function to find the maximum value in a user input array

import readline from 'readline';

let userInputArray;
function findMax(userArray){
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter new array, eg: [value1, value2, value3]: ', (input) => {

    try {
        userInputArray = JSON.parse(input);

        if (!Array.isArray(userInputArray) || userInputArray < 2) {
            throw new Error('Invalid Input. Enter an array which has atleast 3 values!');
        }

        let max = Math.max(...userInputArray);
        console.log(`The maximum value of the array is ${max}`)

        rl.close()
    } catch (error) {
        console.error(error.message)
        rl.close()
    }

})
}

findMax()