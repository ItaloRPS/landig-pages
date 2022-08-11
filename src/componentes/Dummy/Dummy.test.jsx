import { screen } from "@testing-library/react";
import { Dummy } from "."
import { renderTheme } from "../../styles/render-theme"

describe('<Dummy/>',()=>{
    test('shold render Dummy',()=>{
        renderTheme(<Dummy>Children</Dummy>);
        expect(screen.getByText('Children')).toBeInTheDocument()
    });
});