import styled from "styled-components";
import {TypographyH3, TypographyH6} from "../../typography/Typography.ts";
import {Image} from "../../image/Image.ts";
import logo from "../../../assets/images/Logo.png";

const items = [
    {
        title: "Useful link",
        points: ["Behance", "Dribbble"]
    },
    {
        title: "Support",
        points: ["Conditions", "Privecy and policy"]
    },
    {
        title: "Contact us",
        points: ["(773) 217-8810", "Downers Grove, IL 60515"]
    },
]
export const Footer = () => {
    return (
        <StyledFooter>
            <LogoDescription>
                <Image img={logo}/>
                <TypographyH6>
                    Software with new look.
                    Live the life that you expect.
                </TypographyH6>
            </LogoDescription>
            {items.map((el, index) => <StyledItem key={index}>
                <TypographyH3>{el.title}</TypographyH3>
                {el.points.length > 1 && <TypographyH6>
                    {el.points[0]}
                </TypographyH6>}
                {el.points.length > 1 && <TypographyH6>
                    {el.points[1]}
                </TypographyH6>}

            </StyledItem>)}
        </StyledFooter>
    );
};

const LogoDescription = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
const StyledFooter = styled.div`
    display: flex;
    justify-content: space-evenly;

    align-items: center;
    height: 211px;
    width: 100%;
    background-color: rgba(142, 230, 201, .1);
    padding-top: 47px;
    padding-bottom: 47px;
`

const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: flex-start;
    align-items: flex-start;
    //height: 211px;
    //width: 100%;
    //padding: 0 115px;
`