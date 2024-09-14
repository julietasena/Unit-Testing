const pin = require('../scr/pin')

describe('Pruebas de validación de PIN', () => {
    test('PIN de 4 dígitos válido', () => {
        expect(pin(1234)).toBe(true);
    });
    test('PIN de 6 dígitos válido', () => {
        expect(pin(123456)).toBe(true);
    });
    test('PIN de 5 dígitos inválido', () => {
        expect(pin(12345)).toBe(false);
    });
    test('PIN de 4 dígitos no numerico', () => {
        expect(pin('123a')).toBe(false);
    });

    test('PIN de 6 dígitos no numerico', () => {
        expect(pin('1234Aa')).toBe(false);
    });
})