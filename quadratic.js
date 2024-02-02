import readline from 'readline';

function quadraticSolver() {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let a, b, c;

    rl.question('Enter the value of a: ', (inputA) => {
        a = parseFloat(inputA);

        rl.question('Enter the value of b: ', (inputB) => {
            b = parseFloat(inputB);

            rl.question('Enter the value of c: ', (inputC) => {
                c = parseFloat(inputC);

                let delta = Math.pow(b, 2) - 4 * a * c;

                if(delta >= 0){
                    let sqrtdelta = Math.sqrt(delta);
                    console.log(`The value of delta is ${sqrtdelta}`);
                    let x1 = (-b + sqrtdelta) / (a * 2);
                    let x2 = (-b - sqrtdelta) / (a * 2);
                    console.log(`The value of x1 is ${x1} and the value of x2 is ${x2}`);
                }else{
                    console.log('The value of delta is a negative number so there\'s no value for x')
                }

                rl.close();
            });
        });
    });
}

//Call the function to start the quadratic solver
quadraticSolver();
