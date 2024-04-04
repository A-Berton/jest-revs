export function sum (a, b) {
    return a + b;
}

export function sum2 (a, b) {
    if(a !== 'number' || b !== 'number') {
        throw new NotANumberError ('parameters must be numbers');
    }
} 
