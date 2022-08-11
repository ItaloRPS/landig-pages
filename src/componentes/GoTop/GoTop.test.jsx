import { screen } from '@testing-library/react';
import {renderTheme} from '../../styles/render-theme'
import {GoTop} from '.'
describe('<GoTop/>',()=>{
    test('shold render a Go to top buttom',()=>{
        renderTheme(<GoTop>Children</GoTop>);
        expect(screen.getByRole('link',{name:'Go to top'})).toBeInTheDocument()
        expect(screen.getByRole('link',{name:'Go to top'})).toHaveAttribute(
            'href',
            '#'
        )
    });
});