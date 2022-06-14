import { screen } from "@testing-library/react";
import { Dummy } from "."
import { renderTheme } from "../../styles/render-theme"

describe('<Dummy/>',()=>{
    test('shold render',()=>{
        renderTheme(<Dummy>Children</Dummy>);
        expect(screen.getAllByRole('heading')).toBeInTheDocument()
    });
});