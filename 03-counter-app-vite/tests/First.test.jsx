import {render} from '@testing-library/react';
import { First } from '../src/FirstApp';

describe('pruebas en <First />', () => {

  test('debe de hacer match con el snapshot', () => {
   const title = 'Hola, soy Goku';
    const {container}=render(<First title={title} />);

  expect(container).toMatchSnapshot();
  });
  
  test('debe mostrar el titulo un h1', () => {
    const title = 'Hola, soy Goku';
    const { container, getByText }=render(<First title={title} />);

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(title);

  })
  
});
