import { screen } from '@testing-library/react';
import {renderTheme} from '../../styles/render-theme'
import {GridTwoColumns} from '.'
import mock from './mock';
describe('<GridTwoColumns/>',()=>{
    test('shold render',()=>{
        renderTheme(<GridTwoColumns {...mock} />);
        expect(screen.getAllByRole('heading',{name:'Grid Two Columns'}))
    });
});