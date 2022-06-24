//Ifeoluwa Ogungbemi I4G000988ANZ
//Javascript Calculator

const operator = prompt("Hi, enter an operator to perform your calculation(+, -, *, / or %)");


const num_1 = parseFloat(prompt("Enter yout first number: "));
const num_2 = parseFloat(prompt("Enter yout second number: "));

let result;

if (operator == "+"){
    result = num_1 + num_2;
}

else if (operator == "-"){
    result = num_1 - num_2;
}

else if (operator == "/"){
    result = num_1 / num_2;
}

else if (operator == "*"){
    result = num_1 * num_2;
}

else if (operator == "%"){
    result = num_1 % num_2;
}

alert("Answer is: " + result)