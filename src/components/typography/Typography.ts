import styled from "styled-components";
//todo opacity: .7;
export const Typography = styled.h1`
    text-align: left;
    font-weight: 600;
    font-size: 54px;
    line-height: 75px;
    letter-spacing: 0;

    color: rgba(2, 18, 6, 1);
`
export const TypographyH2 = styled.h2`
    font-weight: 600;
    font-size: 45px;
    line-height: 100%;
    letter-spacing: 0;
    //opacity: .7;
    color: rgba(2, 18, 6, 1);
    
`
export const TypographyH3 = styled.h3`
    text-align: left;
    margin-top: 25px;
    font-weight: 400;
    font-size: 21px;
    line-height: 160%;
    letter-spacing: 0;
   
    color: #021206;

    span {
        font-weight: 500;
        font-size: 21px;
        line-height: 160%;
        letter-spacing: 0;

    }
`
export const TypographyH3_4 = styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 170%;
    letter-spacing: 0;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 35px;

`
export const TypographyH4 = styled.h4`
    max-width:480px;
    
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0 ;
    color: #021206;
    span{
        font-weight: 600;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0 ;

    }
`
export const TypographyH6 = styled.h4`
    padding-top: 10px;
    
    max-width: 220px;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0%;

`
export const TypographyGreen = styled.span`
    font-weight: 600;
    font-size: 54px;
    line-height: 100%;
    letter-spacing: 0;

    color: rgba(47, 238, 175, 1);
`


type TypographyButtonTextProps = {
    color?: string
    padding?: string
    paddingLR?:string
}
export const TypographyButtonText = styled.span<TypographyButtonTextProps>`
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;
    padding: ${props => props.padding || "0"};
    padding-left: ${props => props.paddingLR || "0"};
    padding-right: ${props => props.paddingLR || "0"};

    &:hover {
        cursor: pointer;
    }

    color: ${props => props.color || "#FFFFFF"};
`