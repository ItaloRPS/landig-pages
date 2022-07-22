import { screen } from '@storybook/testing-library';
import {renderTheme} from '../../styles/render-theme'
import {GridTwoColumns} from '.'
import mock from './mock';
describe('<GridTwoColumns/>',()=>{
    test('shold render',()=>{
        renderTheme(<GridTwoColumns {...mock} />);
        expect(screen.getAllByRole('heading')).toBeInTheDocument()
    });
});