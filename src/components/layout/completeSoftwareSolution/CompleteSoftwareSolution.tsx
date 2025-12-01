import styled from "styled-components";
import {TypographyButtonText, TypographyH2, TypographyH4} from "../../typography/Typography.ts";
import {Button} from "../../button/Button.tsx";
import {Solution} from "./solution/Solution.tsx";
import user from "../../../assets/images/user 1.png"
import easy from "../../../assets/images/easy.png"
import shield from "../../../assets/images/shield 1.png"
import coding from "../../../assets/images/coding 1.png"

const solutionsObj= [
    {
        title:"Easy Settings",
        description:"A complete about-face in core economic amsterday bilamco progressive.",
        bgGR:"linear-gradient(141.58deg, #FF9A9A 3.63%, #F14C4C 91.45%)",
        colorBG:"rgba(215, 21, 21, 0.5)",
        image:easy
    },
    {
        title:"User Friendly",
        description:"A complete about-face in\n" +
            "core economic amsterday bilamco progressive.",
        bgGR:"linear-gradient(154.24deg, #85FED6 4.45%, #4EDAAC 83.73%)",
        colorBG:"rgba(83, 215, 171, 0.5)",
        image:user
    },
    {
        title:"Full secured",
        description:"A complete about-face in\n" +
            "core economic amsterday bilamco progressive.",
        bgGR:"linear-gradient(163.65deg, #FCD876 4.69%, #FABC13 88.66%)",
        colorBG:"rgba(238, 185, 42, 0.6)",
        image:shield
    },
    {
        title:"Clean Code",
        description:"A complete about-face in\n" +
            "core economic amsterday bilamco progressive.",
        bgGR:"linear-gradient(143.75deg, #FE9AF4 0%, #EC4EDC 88.72%)",
        colorBG:"rgba(230, 68, 214, 0.5)",
        image:coding
    },
]
export const CompleteSoftwareSolution = () => {
    return (
        <StyledCompleteSoft>
            <StyledSolution>
                {solutionsObj.map((el,index)=><Solution
                    bgGR={el.bgGR}
                    colorBG={el.colorBG}
                    image={el.image}
                    title={el.title}
                    description={el.description}
                    key={index}/>)}
            </StyledSolution>
            <StyledAboutSolution>
                <TypographyH2>
                    A complete software solution for you.
                </TypographyH2>
                <TypographyH4>
                    The source of powerful qorld and making
                    future sure. Its a straight forward software.
                </TypographyH4>
                <TypographyH4>
                    Where possibilities are made possible.
                    We must have expand <span>Possibilities of
                    better tomorrow.</span> The directly secure of
                    your network deliveing services.
                </TypographyH4>
                <BlockButtonLink>
                    <Button grandColor={"black"}>
                        <TypographyButtonText padding={"5px"} >
                            Learn more
                        </TypographyButtonText>
                    </Button>
                    <StyledLink>
                        <a>Ask?</a>
                    </StyledLink>
                </BlockButtonLink>
            </StyledAboutSolution>
        </StyledCompleteSoft>
    );
};

const StyledLink = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0;
    color: rgba(255, 77, 77, 1);

`
const BlockButtonLink = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    a {
        color: red;
    }

    a {
        cursor: pointer;
    }
`

const StyledSolution = styled.div`
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;
    //border: 1px solid;
    width: 57%;
    gap: 30px;
`

const StyledAboutSolution = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    //align-items: center;
    //border: 1px solid;
    width: 50%;

    ${TypographyH2} {
        padding-bottom: 20px;
    }

    ${TypographyH4} + ${TypographyH4} {
        padding: 16px 0 30px 0;
    }

    ${BlockButtonLink} {
        ${Button} {
            align-self: flex-start;

            ${TypographyButtonText} {
                display: inline-block;
            }
        }
    }


`

const StyledCompleteSoft = styled.div`
    display: flex;
    width: 1200px;
    margin-bottom: 115px;
    //border: 1px solid;
    height: 610px;
    margin-top: 110px;
    gap: 74px;
`
