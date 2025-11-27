import styled from "styled-components";
import {TypographyH3} from "../../../typography/Typography.ts";
import {Image} from "../../../image/Image.ts";

type PropsType = {
    title: string
    description: string
    bgGR:string
    colorBG:string
    image:any
}
export const Solution = ({description, title,colorBG,image,bgGR}: PropsType) => {
    return (
        <StyledSolution>
            <StyledCub
                shadow={`1px 5px 30px 0 ${colorBG}`}
                bgGR={bgGR}>
                <Image img={image} width={"35px"} height={"35px"}/>
            </StyledCub>
            <TypographyH3>
                {title}
            </TypographyH3>
            <StyledDescription>
                {description}
            </StyledDescription>
        </StyledSolution>
    );
};
type StyledCubProps = {
    bgGR: string
    shadow: string
}
const StyledCub = styled.div<StyledCubProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    border-radius: 10px;
    background: ${props => props.bgGR};
    box-shadow: ${props => props.shadow};
`

const StyledDescription = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0;
    text-align: left;

`
const StyledSolution = styled.div`
    padding-top: 35px;
    padding-left: 35px;
    display: flex;
    flex-direction: column;

    ${TypographyH3} {
        font-weight: 600;
        font-size: 21px;
        line-height: 100%;
        letter-spacing: 0;
        margin-top: 25px;

    }

    ${StyledDescription} {
        margin: 10px 0 26px;
    }

    width: 282px;
    height: 290px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(65, 77, 68, 0.15);

    &:hover {
        box-shadow: 0 15px 65px 0 rgba(65, 77, 68, 0.15);
    }

`