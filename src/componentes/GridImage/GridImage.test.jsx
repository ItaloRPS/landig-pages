import {renderTheme} from '../../styles/render-theme'
import {GridImage} from '.'

import mock from './mock'
describe('<GridImage/>',()=>{
    test('shold render grid content',()=>{
     const {container} =  renderTheme(<GridImage {...mock}/>);
        expect(container).toMatchSnapshot()
    });
    
 });