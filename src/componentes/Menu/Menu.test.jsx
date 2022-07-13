import { screen } from '@storybook/testing-library';
import {renderTheme} from '../../styles/render-theme'
import {Menu} from '.'

import linksMock from '../NavLinks/mock'
import { theme } from '../../styles/theme';
const logoData ={
    text:'logo',
    link:'#target'
} 

describe('<Menu/>',()=>{
    test('shold render logo main menu',()=>{
        renderTheme(<Menu links={linksMock} logoData={logoData}>Children</Menu>);
        expect(screen.getAllByRole('heading',{name:'logo'})).toBeInTheDocument()

        expect(screen.getByRole('navigation',{name:'Main menu'}))
    });

    test('shold render menu mobile and button for open and close the menu',()=>{
        renderTheme(<Menu links={linksMock} logoData={logoData}>Children</Menu>);
       
        const button = screen.getByLabelText('Open/Close Menu')
        const menuContainer = button.nextSibling

        expect(button).toHaveStyleRule('display','none')
        expect(button).toHaveStyleRule('display','block',{
            media:theme.media.lteMedium
        })
        expect(button).toHaveStyleRule('opacity','0',{
            media:theme.media.lteMedium
        })

        expect(screen.getByLabelText('Close Menu')).toBeInTheDocument()

        fireEvent.click(button)

        expect(button).toHaveStyleRule('opacity','1',{
            media:theme.media.lteMedium
        })
        expect(screen.getByLabelText('Open Menu')).toBeInTheDocument()

        fireEvent.click(menuContainer)

        expect(button).toHaveStyleRule('opacity','0',{
            media:theme.media.lteMedium
        })
        expect(screen.getByLabelText('Close Menu')).toBeInTheDocument()
    });

    test('shold not render links',()=>{
        renderTheme(<Menu logoData={logoData}>Children</Menu>);
        expect(screen.getByRole('navigation',{name:'Main menu'}).firstChild,).not.toBeInTheDocument
    });
});