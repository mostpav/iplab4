import {
    sum,
    subtract,
    muliply,
    divide
} from "./mathoperations.js";

const a = 12;
const b = 4;

console.log("Перше число:", a);
console.log("Друге число:", b);

console.log("Сума:", sum(a, b));
console.log("Різниця:", subtract(a, b));
console.log("Добуток:", muliply(a, b));
console.log("Ділення:", divide(a, b));

try {
    console.log("Ділення на нуль:", divide(a, 0));
} catch (error) {
    console.error(error.message);
}