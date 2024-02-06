// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
// 2. Filter and show the product that will be expensive in the array
// 3. Calculate the full price of all products combined
// 4. Calculate the full price of all products combined and remove products that are under $10
// 5. Filter and show the product that will be start with letter b at first postion

const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];

// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const result1 = items.filter((element) => element.price <= 10)
console.log(result1)

// 2. Filter and show the product that will be expensive in the array
const result2 = items.filter((element) => element.price >= 1000)
console.log(result2)

// 3. Calculate the full price of all products combined
const result3 = items.reduce((a,b) => { return a + b.price}, 0)
console.log(result3)

// 4. Calculate the full price of all products combined and remove products that are under $10
const result4 = items.filter((element) => element.price >=10).reduce((a,b) => a + b.price, 0)
console.log(result4)

// 5. Filter and show the product that will be start with letter b at first postion
const result5 = items.filter((element) => element.name.charAt(0) === 'B')
console.log(result5)