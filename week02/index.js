// Ex 1
const gretter = (myArray, counter) => {
    let greetText = "Hello";

    for (let name of myArray){
        console.log(`${greetText} ${name}`)
    }
};

console.log("Exercise 1:");
gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)

// Ex 2
const capitalize = str => {
    const [firstLetter, ...rest] = str;

    return `${firstLetter.toUpperCase()}${rest.join("")}`;
}

console.log("\nExercise 2:");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Ex 3
console.log("\nExercise 3:");
const colors = ["red", "green", "blue"];

const capitalizedColors = () => colors.map(color => capitalize(color))
console.log(capitalizedColors());

