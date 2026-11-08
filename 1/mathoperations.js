export function sum(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function muliply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Ділити на нуль не можна!");
    }

    return a / b;
}