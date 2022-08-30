import { screen } from '@testing-library/react';
import {renderTheme} from '../../styles/render-theme'
import {MenuLink} from '.'

describe('<MenuLink/>',()=>{
    test('shold render a link',()=>{
        renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
        expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
          'target',
          '_self',
        );
      });
    
    test('shold render open in new tab',()=>{
        renderTheme(<MenuLink link='http://localhost' newTabe={true}>Children</MenuLink>);
        expect(screen.getAllByRole('link',{name:'Children'})).toMatchInlineSnapshot();
    });
});