import styled,{css} from 'styled-components';


const titleSizes = {
    small: (theme) => css`
        font-size: ${theme.font.sizes.small};
    `,
    medium:(theme) => css`
        font-size: ${theme.font.sizes.large};
    `,
    big:(theme) => css`
        font-size: ${theme.font.sizes.xlarge};
    `,
    huge: (theme) => css`
    font-size:${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
    `,
}


const mediaFont = (theme) => css`
    @media ${theme.media.lteMedium}{
    font-size: ${theme.font.xlarge};
}
`;
const titleCase = (uppercase) => css`
text-transform:${uppercase?'uppercase' : 'none'};
`;

export const Title = styled.h1`
${({theme,colorDark, size , uppercase})=> css`
    color: ${colorDark?theme.color.primatyColor:theme.color.white};
    ${titleSizes[size](theme)}
    ${titleCase(uppercase)}
`}
`;