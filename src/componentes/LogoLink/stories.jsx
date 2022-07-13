import { LogoLink } from '.'
 
export default {
    title:'LogoLink',
    component: LogoLink,
    args:{
        text:'LogoLink',
        srcImg:'',
        link:'http://localhost'
    },
    argsTypes:{
        text:{type:'string'},
        link:{type:'string'},
        srcImg:{type:'string'}
    }

}

export const Template = (args)=>{
    return (<div>
                <LogoLink {...args}/>
            </div>)
}
