import {Heading} from '.'
export default {
    title:'Heading',
    component: Heading,
    args:{
        children:'textto'
    },
    argTypes:{
        children:{type:'string'}
    },
    parameters:{
        backgroud:{
            default:'dark'
        }
    }
        
}

export const Ligth = (args) => <Heading {...args}/>
export const Dark = (args) => <Heading {...args}/>

Ligth.parameters ={
    backgroud:{
        default:'ligth'
    }
}

Dark.args = {
    children: 'O texto esta claro',
    colorDark: false,
}