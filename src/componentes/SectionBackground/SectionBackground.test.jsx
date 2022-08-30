import { screen } from '@testing-library/jest-dom';
import {renderTheme} from '../../styles/render-theme'
import {SectionBackground} from '.'
describe('<SectionBackground/>',()=>{
    test('shold render with background dark',()=>{
        const  {container}=  renderTheme(<SectionBackground>Children</SectionBackground>);
        expect(container).toMatchSnapshot()
    });

    test('shold render with background light',()=>{
        const  {container}=  renderTheme(<SectionBackground>Children</SectionBackground>);
        expect(container).toMatchSnapshot()
    });
});