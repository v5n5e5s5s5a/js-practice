// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.
// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.


const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// Q.1: Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
console.log(colors.join(' , '));


// Q.2: Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'. 
console.log(colors.splice(2, 2, "purple","pink"))
console.log(colors)


// Q.3: Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
console.log(colors.copyWithin(0 ,1 ,3))


// Q.4: Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.
const upper = colors.map(element => {
    return element.toUpperCase();
})
console.log(upper)


// Q.5: Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
console.log(colors.find((element) => element.startsWith('b')))


// Q.6: Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.
console.log(colors.slice(1,4))
