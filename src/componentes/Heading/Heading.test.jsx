import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import {Heading} from './index';


describe('<Heading>', ()=> {
  test('shold render default values',()=>{
    const {debug} = renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading',{name:'Texto'})
    expect(heading).toHaveStyle({
      color:theme.color.primatyColor,
      'font-size':theme.font.sizes.xhuge,
      'text-transform':'none'
    })
  })
  test('shold render with white color',()=>{
    renderTheme(<Heading colorDark={false}> Texto</Heading>);
    const heading = screen.getByRole('heading',{name:'Texto'})
    
    expect(heading).toHaveStyle({
      color:theme.color.white
    })
  })

  test('shold render correct heading size',()=>{
   const {rerender} = renderTheme(<Heading colorDark={false}> Texto</Heading>);
    const heading = screen.getByRole('heading',{name:'Texto'})
    
    expect(heading).toHaveStyle({
      'font-size':theme.font.sizes.xhuge,
    })
    
  })


})

