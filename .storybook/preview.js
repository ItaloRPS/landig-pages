import { ThemeProvider } from "styled-components"
import { theme } from "../src/styles/theme"
import {GlobalStyle} from '../src/styles/styles-global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrouds:{
    default: 'ligth',
    values:[
      {
        name:'ligth',
        value:theme.color.white
      },
      {
        name:'dark',
        value:theme.color.primatyColor
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story)=>(
  <ThemeProvider theme={theme}>
    <Story />
    <GlobalStyle/>
  </ThemeProvider>
  )
]