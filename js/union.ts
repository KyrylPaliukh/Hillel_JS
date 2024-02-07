export function processInput(input: string | number): number {
    if (typeof input === 'number') {
        return input * input; // квадрат числа
    } else {
        return input.length; // довжина рядка
    }
}
