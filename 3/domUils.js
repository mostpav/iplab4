
export function changeText(elementId, text) {
    const element = document.getElementById(elementId);

    if (element) {
        element.textContent = text;
    } else {
        console.error(`Елемент з ID "${elementId}" не знайдено.`);
    }
}