import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('pruebas en 08-imp-exp', () => {
  
    test('getHeroesById debe retornar un heroe por Id', () => {
      
        const id = 1;

        const hero = getHeroeById(id);

        expect( hero ).toEqual({ 
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
 
    });

    test('getHeroesById debe retornar undefine si no existe el id', () => {
      
        const id = 100;

        const hero = getHeroeById(id);

        expect( hero ).toBe(undefined);
 
    });
    
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
      
        const owner = 'DC';

        const heroesDC = getHeroesByOwner(owner);
        console.log(heroesDC);
        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        expect(heroesDC).toEqual( heroes.filter((heroe) => heroe.owner === owner));
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de marvel', () => {
      
        const owner = 'Marvel';

        const heroesMarvel = getHeroesByOwner(owner);
        console.log(heroesMarvel);
        expect(heroesMarvel.length).toBe(2);
        expect(heroesMarvel).toEqual( heroes.filter((heroe) => heroe.owner === owner));
    });
    
})
