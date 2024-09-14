const siglo = require('../scr/siglo')

describe('Pruebas de calculo de siglo',() => {
    test ('Año: 1705 es siglo 18', ()=>{
        expect(siglo(1705)).toBe(18)
    })
    test ('Año: 1900  es siglo 19', ()=>{
        expect(siglo(1900)).toBe(19)
    })
    test ('Año: 1601 es siglo 19', ()=>{
        expect(siglo(1601)).toBe(17)
    })
    test ('Año: 2054 es siglo 21', ()=>{
        expect(siglo(2054)).toBe(21)
    })
    test ('Año: 3600 es siglo 36', ()=>{
        expect(siglo(3600)).toBe(36)
    })
})