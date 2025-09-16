function ex1(text){
    let answer = "";
    answer += text[0].toUpperCase();

    for (let i = 1; i < text.length; i++){
        if (text[i - 1] == " "){
            answer += text[i].toUpperCase();
            continue;
        }
        
        answer += text[i];
    }

    console.log(answer);
}

// Ex. 2
function ex2(num1, num2 ,num3){
    console.log(Math.max(num1, num2, num3));
}

function ex3(text){
    if (text.length > 3){
        console.log(text.slice(text.length - 3) + text.slice(0, text.length - 3));
    } else{
        console.log(text);
    }
}

function ex4(angle){
    if (angle >= 0 && angle < 90){
        console.log("Acute angle");
    } else if (angle == 90) {
        console.log("Right angle");
    } else if (angle > 90 && angle < 180){
        console.log("Obtuse angle");
    } else if (angle == 180){
        console.log("Straight angle")
    }
}

console.log("\nExercise 1:")
ex1("The Quick Brown Fox");

console.log("\nExercise 2:")
ex2(1, 0, 1);
ex2(0, -10, -20);
ex2(1000, 510, 440);

console.log("\nExercise 3:");
ex3("Python");
ex3("JavaScript");
ex3("Hi");

console.log("\nExercise 4:");
ex4(47);
ex4(90);
ex4(145);
ex4(180);