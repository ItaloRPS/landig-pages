import { screen } from '@storybook/testing-library';
import {renderTheme} from '../../styles/render-theme'
import {Footer} from '.'
describe('<Footer/>',()=>{
    test('shold render',()=>{
    const {container} = renderTheme(<Footer html={'<h1>Ola</h1>'}/>);
    expect(screen.getAllByRole('heading',{name:'Ola'})).toBeInTheDocument()
    expect(container).toMatchInlineSnapshot()
    });
});