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
const colors = ["red", "green", "blue"];

const capitalizedColors = () => colors.map(color => capitalize(color))

console.log("\nExercise 3:");
console.log(capitalizedColors());

// Ex 4
const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = () => values.filter(number => number < 20);

console.log("\nExercise 4:");
console.log(filterLessThan20());

// Ex 5
const array = [1, 2, 3, 4]

const calculateSum = () => array.reduce((acc, number) => acc + number, 0);
const calculateProduct = () => array.reduce((acc, number) => acc * number, 1);

console.log("\nExercise 5:");
console.log(calculateSum());
console.log(calculateProduct());