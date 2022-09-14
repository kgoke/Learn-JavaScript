// example of looping through and array
// defined the array pets with 3 values
// loop form 0 to the length of array pets
// adds 's' to the end of each pet name to make it plural
let pets = ['cat', 'dog', 'rat']
for (let i = 0; i < pets.length; i++) {
    pets[i] = pets[i] + 's'
}
console.log(pets)
