import styled,{css} from 'styled-components';


const titleSizes = {
    small:(theme)=>css`
    font-size:${theme.font.sizes.small}`,
    medium:(theme)=>css`
    font-size:${theme.font.sizes.large}`,
    big:(theme)=>css`
    font-size:${theme.font.sizes.xlarge}`,
    huge:(theme)=>css`
    font-size:${theme.font.sizes.xhuge}`,
}

export const Wrapper = styled.h1`
${({colorDark,size,theme})=> css`
    color: ${colorDark?theme.color.primatyColor:theme.color.secondaryColor};
    ${titleSizes[size](theme)}
`}
`;