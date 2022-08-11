import {renderTheme} from '../../styles/render-theme'
import {Base} from '.'
import { mocBase } from './mock';

describe('<Base/>',()=>{
    test('should render',()=>{
       const {container}= renderTheme(<Base {...mocBase}/>);
        expect(container).toMatchSnapshot()
    });
});