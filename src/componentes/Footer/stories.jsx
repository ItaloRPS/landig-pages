import { Footer } from '.'
 
export default {
    title:'Footer',
    component: Footer,
    args:{
        html:'<p><a href="https//beacons.page/otaviomranda"> Feito por Italo Silva ♠</a></p>'
    },
    argsTypes:{
        html:{type:'string'}
    }

}

export const Template = (args)=>{
    return (<div>
                <Footer {...args}/>
            </div>)
}