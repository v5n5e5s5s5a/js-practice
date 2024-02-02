//factorial
function fact(num){
    let y = 1;
    if (num < 0) {
        console.log('Factorial cannot be a negative or zero');
    }

    for(let i=1; i<=num; i++){
        y*=i;
    }
    return y;
}

console.log(fact(7));