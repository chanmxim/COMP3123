// Ex 1
const gretter = (myArray, counter) => {
    let greetText = "Hello";

    for (let name of myArray){
        console.log(`${greetText} ${name}`)
    }
};

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)

