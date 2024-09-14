const volumen = require('../scr/volumen')

describe('Pruebas de volumen',() => {
    test ('diametro:2, altura:2, m =', ()=>{
        expect(volumen(2,2,'m')).toBeCloseTo(6.28)
    })
    test ('diametro:200, altura:200, cm =', ()=>{
        expect(volumen(200,200,'cm')).toBeCloseTo(6.28)
    })
    test ('diametro:0, altura:200, m =', ()=>{
        expect(volumen(0,200,'m')).toBeCloseTo(0)
    })
    test ('diametro:520, altura:20, cm =', ()=>{
        expect(volumen(520,20,'cm')).toBeCloseTo(4.25)
    })
    test ('diametro:84, altura:31, m =', ()=>{
        expect(volumen(84,31,'m')).toBeCloseTo( 171794.85)
    })

})