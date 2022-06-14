describe('</>',()=>{
    test('shold render',()=>{
        renderTheme(<>Children</>);
        expect(screen.getAllByRole('heading')).toBeInTheDocument()
    });
});