import {render} from '@testing-library/react';
import { First } from '../src/FirstApp';

describe('pruebas en <First />', () => {

  test('debe de hacer match con el snapshot', () => {
    const title = 'Hola, soy Goku';
    render(<First title='{title}' />);

  });
  
});
