import { screen } from '@testing-library/react';
import {renderTheme} from '../../styles/render-theme'
import {SectionContainner} from '.'
describe('<SectionContainner/>',()=>{
    test('shold render',()=>{
       const{container}= renderTheme(<SectionContainner>Children</SectionContainner>);
        expect(container).toMatchSnapshot()
    });
});