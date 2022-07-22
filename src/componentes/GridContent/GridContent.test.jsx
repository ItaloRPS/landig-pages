import { screen } from '@storybook/testing-library';
import {renderTheme} from '../../styles/render-theme'
import {GridContent} from '.'

import mock from './mock'
describe('<GridContent/>',()=>{
    test('shold render grid content',()=>{
     const {container} =  renderTheme(<GridContent {...mock}/>);
        expect(container).toMatchSnapshot()
    });
    
    test('shold render grid content',()=>{
     const {container} =  renderTheme(<GridContent {...mock} background={undefined}/>);
        expect(container).toMatchSnapshot()
    });
});