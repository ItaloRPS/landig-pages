import { screen } from '@testing-library/react';
import {renderTheme} from '../../styles/render-theme'
import {NavLinks} from '.'
import mock from './mock'
import { theme } from '../../styles/theme';
describe('<NavLinks/>',()=>{

    test('shold render',()=>{
        renderTheme(<NavLinks links={mock}/>);
        expect(screen.getAllByRole('link')).toHaveLength(mock.length)
    });

    test('shold not hender links',()=>{
        renderTheme(<NavLinks/>);
        expect(screen.queryAllByText(/links/i)).toHaveLength(0)
    });

    test('shold not hender links',()=>{
        renderTheme(<NavLinks links={mock}/>);
        expect(screen.getByText('Link1').parentElement).
        toHaveStyleRule(
            'flex-flow', 
            'column wrap',
            {
                media:theme.media.lteMedium,
            }
        )
    });
});