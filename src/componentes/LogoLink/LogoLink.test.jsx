import { screen } from '@testing-library/react';
import {renderTheme} from '../../styles/render-theme'
import {LogoLink} from '.'
describe('<LogoLink/>',()=>{
    test('shold render text logo',()=>{
        renderTheme(<LogoLink link="#target" text="Olá mundo" />);
        expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
          'href',
          '#target',
        );
    });
    
});