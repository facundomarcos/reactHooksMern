import {render} from '@testing-library/react';
import { First } from '../src/FirstApp';

describe('pruebas en <First />', () => {

  // test('debe de hacer match con el snapshot', () => {
  //  const title = 'Hola, soy Goku';
  //   const {container}=render(<First title={title} />);

  // expect(container).toMatchSnapshot();
  // });
  
  test('debe mostrar el titulo un h1', () => {
    const title = 'Hola, soy Goku';
    const { container, getByText, getByTestId }=render(<First title={title} />);

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('debe de mostrar subtitulo enviado por props', () => { 
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    const {  getAllByText } = render(
    <First 
      title={title}
      subTitle={subTitle}
    />
    );
  //  expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
   });
  


 
});
