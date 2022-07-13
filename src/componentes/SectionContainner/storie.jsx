import { SectionContainner } from '.'
 
export default {
    title:'SectionContainner',
    component: SectionContainner,
    args:{
        children:(
            <div>
                <h1>SectionContainner</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus, fugit distinctio dolor voluptate accusamus odit fuga velit minus recusandae odio sunt eos voluptatem voluptatum nobis 
                    vitae ut reiciendis praesentium?</p>
            </div>
        ),
    },
    argsTypes:{
        children:{type:''}
    }

}

export const Template = (args)=>{
    return (<div>
                <SectionContainner {...args}/>
            </div>)
}