describe('<MenuLink/>',()=>{
    test('shold render a link',()=>{
        renderTheme(<MenuLink link={'http://localhost'}>Children</MenuLink>);
        expect(screen.getAllByRole('link',{name:'Children'})).toHaveAttribute('target','_self')
    });
    
    test('shold render open in new tab',()=>{
        renderTheme(<MenuLink link={'http://localhost'} newTabe={false}>Children
        </MenuLink>);
        expect(screen.getAllByRole('link',{name:'Children'})).toMatchInlineSnapshot();
    });
});