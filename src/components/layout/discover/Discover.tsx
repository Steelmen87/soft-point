import styled from "styled-components";
import {TypographyH2, TypographyH4} from "../../typography/Typography.ts";
import don from "../../../assets/images/Green.png"
import {Image} from "../../image/Image.ts";
import chart1 from "../../../assets/images/Chart1.png"
import chart2 from "../../../assets/images/Chart2.png"
import chart3 from "../../../assets/images/Chart3.png"
import {ImageEllipse} from "../main/Main.tsx";

const Ellipse = [
    {
        gradient: "linear-gradient(176.15deg, #8EE7CA 19.68%, #87D2BA 96.85%)",
        shadow: "0px 4px 70px 0 rgba(155, 215, 195, 0.8)"
    }
]
export const Discover = () => {
    return (
        <StyledDiscover>
            <StyledContentBlock>
                <TypographyH2>
                    Discover & growth with analysis.
                </TypographyH2>
                <TypographyH4>
                    Software with new dimensions. The better future
                    and information about the virtual world.
                </TypographyH4>
                <StyledList>
                    <StyledItem>Software with new dimensions the better.</StyledItem>
                    <StyledItem>Effortlessly manages all your information.</StyledItem>
                    <StyledItem>Simple Solutions for Complex Connections.</StyledItem>
                    <StyledItem>Complete business solutions for customers.</StyledItem>
                </StyledList>
            </StyledContentBlock>
            <StyledImageBlock>
                <ImageChart1 height={"395px"} width={"578px"} img={chart1}/>
                <ImageChart2 height={"395px"} width={"578px"} img={chart2}/>
                <ImageChart3 height={"395px"} width={"578px"} img={chart3}/>
                <ImageEllipse
                    width={"110px"}
                    height={"110px"}
                    top={"27px"}
                    left={"10px"}
                    gradient={Ellipse[0].gradient}
                    shadow={Ellipse[0].shadow}
                />
            </StyledImageBlock>
        </StyledDiscover>
    );
};

const ImageChart3 = styled(Image)`
    position: absolute;
    z-index: 1;
    top: 156px;
    left: -208px;
`
const ImageChart2 = styled(Image)`
    position: absolute;
    z-index: 1;
    top: 186px;
    left: 197px;
`
const ImageChart1 = styled(Image)`
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 12px;

`

const StyledImageBlock = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    //border: 1px solid;
`
export const StyledItem = styled.li`

`
export const StyledList = styled.ul`
    list-style-image: url(${don});
    padding-left: 26px;

    ${StyledItem} {
        margin-bottom: 16px;
    }
`
const StyledContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    text-align: left;
    //border: 1px solid;
    height: 464px;
    //margin-top: 110px;

    ${TypographyH4} {
        margin-top: 20px;
        margin-bottom: 20px;
    }

`
const StyledDiscover = styled.div`
    display: flex;
    justify-content: space-between;

    width: 1200px;
    margin-bottom: 115px;
    //border: 1px solid;
    height: 464px;
    //margin-top: 110px;
    gap: 74px;
`