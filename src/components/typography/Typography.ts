import styled from "styled-components";
//todo opacity: .7;
export const Typography = styled.h1`
    font-weight: 600;
    font-size: 54px;
    line-height: 100%;
    letter-spacing: 0;

    color: rgba(2, 18, 6, 1);
`
export const TypographyH2 = styled.h2`
    font-weight: 600;
    font-size: 45px;
    line-height: 100%;
    letter-spacing: 0;
    opacity: .7;
    color: rgba(2, 18, 6, 1);
`
export const TypographyGreen = styled.h1`
    font-weight: 600;
    font-size: 54px;
    line-height: 100%;
    letter-spacing: 0;

    color: rgba(47, 238, 175, 1);
`



type TypographyButtonTextProps = {
    color?: string
}
export const TypographyButtonText = styled.span<TypographyButtonTextProps>`
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;

    &:hover {
        cursor: pointer;
    }
 
    color: ${props => props.color || "#FFFFFF"};
`