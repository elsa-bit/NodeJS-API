import { add, substract, multiply } from "./calc.mjs";


test('Additionner 1 + 2 devrait retourner 3', () => {
    expect(add(1,2)).toBe(3); 
});

test('Soustraire 9 à 25 devrait retourner 16', () => {
    expect(substract(25, 9)).toBe(16);
});

test('Multiplier 6 par 7 devrait retourner 42', () => {
    expect(multiply(6, 7)).toBe(42);
});

