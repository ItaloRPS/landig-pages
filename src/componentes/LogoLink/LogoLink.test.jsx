import { screen } from '@storybook/testing-library';
import {renderTheme} from '../../styles/render-theme'
import {LogoLink} from '.'
describe('<LogoLink/>',()=>{
    test('shold render text logo',()=>{
        renderTheme(<LogoLink link='#target' text='ola mundo'/>);
        const heading = screen.getAllByRole('heading',{name:'ola mundo'})
        expect(heading.fistChild).toHaveAttribute('href','#target')
    });
    
    test('shold render image logo',()=>{
        renderTheme(<LogoLink link='#target' text='ola mundo'/>);
        const heading = screen.getAllByRole('heading',{name:'ola mundo'})
        expect(heading.fistChild.fistChild).toHaveAttribute('src','image.jpg')
    });
});