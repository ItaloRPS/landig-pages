import { screen } from '@storybook/testing-library';
import {renderTheme} from '../../styles/render-theme'
import {SectionBackground} from '.'
describe('<SectionBackground/>',()=>{
    test('shold render with background dark',()=>{
        const  {container}=  renderTheme(<SectionBackground>Children</SectionBackground>);
        expect(screen.getAllByRole('heading')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    });

    test('shold render with background light',()=>{
        const  {container}=  renderTheme(<SectionBackground>Children</SectionBackground>);
        expect(screen.getAllByRole('heading')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    });
});