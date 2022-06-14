import { TextComponent } from '.'
 
export default {
  title:'TextComponent',
  component: TextComponent,
  args:{
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi, nostrum odit ipsam praesentium atque eligendi fugiat sequi, perspiciatis voluptatem reprehenderit earum recusandae enim. Adipisci maiores placeat impedit facilis nemo?'
  },
  argsTypes:{
    children:{type:'string'}
  }

}

export const Template = (args)=>{
  return (<div>
        <TextComponent {...args}/>
      </div>)
}