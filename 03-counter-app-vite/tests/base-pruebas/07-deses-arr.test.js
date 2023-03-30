import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07-deses-arr', () => {
  
    test('debe retornar un string y un numero', () => {
      

        const [letters, numbers ] = retornaArreglo();

        expect (letters).toBe('ABC');
        expect (numbers).toBe(123);
        
//espera el tipo de dato
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

//espera cualquier tipo de string
        expect (letters).toStrictEqual(expect.any(String));
        expect (letters).toEqual(expect.any(String));
    })
    
})
