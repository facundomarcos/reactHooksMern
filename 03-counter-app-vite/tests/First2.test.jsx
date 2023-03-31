import {render, screen} from '@testing-library/react';
import { First } from '../src/FirstApp';

describe('pruebas en <First />', () => {

  const title = 'Hola, Soy Goku';
  const subTitle = 'soy un subtitulo';
  test('debe hacer match con el snapshot', () => {
   

    const {container} = render(<First title={title} />)

    expect( container ).toMatchSnapshot();

   });
  
   test('debe mostar el mensaje "Hola, Soy Goku!"', () => {
    render( <First title={ title } />);
     //screen.debug();
      
     expect(screen.getByText(title)).toBeTruthy();
     });

     test('debe de mostrar el titulo en un h1', () => { 
      render( <First title={ title } />);
      expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain(title);

      });

      test('debe de mostrar el subtitulo enviado por props', () => { 
        render( 
        <First 
        title={ title }
        subTitle={subTitle}
        />);
        expect(screen.getAllByText(subTitle).length).toBe(2);
       });

 
});
