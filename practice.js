// // Import the 'readline' module from the Node.js standard library
// import readline from 'readline';

// // Create a readline interface by specifying the input and output streams
// const rl = readline.createInterface({
//     input: process.stdin,        // Use the standard input stream (keyboard)
//     output: process.stdout       // Use the standard output stream (console)
// });

// //declare variables to store user input
// let a,b,c

// // Prompt the user for input a
// rl.question('Enter the value of a: ', (inputA) => {
//     a = parseFloat(inputA);

//     // Prompt the user for input b
//     rl.question('Enter the value of b: ', (inputB) => {
//         b = parseFloat(inputB);

//         // Prompt the user for input c
//         rl.question('Enter the value of c: ', (inputC) => {
//             c = parseFloat(inputC);

//             //calculate delta
//             let delta = Math.pow(b,2) - 4 * a * c;

//             console.log(`Delta is ${delta}`);

//             let x1 = (-b + delta)/(2*a);
//             let x2 = (-b - delta)/(2*a);
//             console.log(`the value of x1 is ${x1} and the value of x2 is ${x2}`);
            
//             rl.close();
//         })
//     })
// })







// import readline from 'readline';



// function findMax(array) {

//     let rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question('Enter new array, eg: [value1, value2, value3]: ', (input) => {
//         try {
//             let userInputArray;
//             userInputArray = JSON.parse(input);

//             if (!Array.isArray(userInputArray) || userInputArray<3) {
//                 throw new Error('Invalid Input. Enter an array which has atleast 3 values!');
//             }

//             let max = (Math.max(...userInputArray));
//             console.log(`the maximum value in the array is ${max}`)
//             rl.close();

//         } catch (error) {
//             console.error(error.message);

//             rl.close();
//         }
//     })
// }

// findMax();