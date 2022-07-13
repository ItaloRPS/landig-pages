import { screen } from '@storybook/testing-library';
import {renderTheme} from '../../styles/render-theme'
import {SectionContainner} from '.'
describe('<SectionContainner/>',()=>{
    test('shold render',()=>{
       const{container}= renderTheme(<SectionContainner>Children</SectionContainner>);
        expect(screen.getAllByRole('heading')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    });
});