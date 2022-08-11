import {renderTheme} from '../../styles/render-theme'
import {GridContent} from '.'

import mock from './mock'
describe('<GridImage/>',()=>{
    test('shold render grid content',()=>{
     const {container} =  renderTheme(<GridContent {...mock}/>);
        expect(container).toMatchSnapshot()
    });
    
 });