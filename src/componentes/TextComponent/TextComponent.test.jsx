import { screen } from '@testing-library/react';
import { renderTheme } from "../../styles/render-theme";
import {TextComponent} from '.'

describe('<TextComponent/>',()=>{
    test('shold render',()=>{
        renderTheme(<TextComponent>Children</TextComponent>);
        const text  = screen.getByText('Children')
        expect(text).toBeInTheDocument()
    });
    test('shold match snapshot',()=>{
        const {container} = renderTheme(<TextComponent>Children</TextComponent>);
        expect(container.firstChild).toMatchSnapshot()
    });
});
