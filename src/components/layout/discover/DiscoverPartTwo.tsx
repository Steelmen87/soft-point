import styled from "styled-components";
import {TypographyH2, TypographyH4} from "../../typography/Typography.ts";
import {Image} from "../../image/Image.ts";
import vk1 from "../../../assets/images/Dashboard VK.png"
import geo from "../../../assets/images/Geo.png"
import gru from "../../../assets/images/Group 67.png"
import age from "../../../assets/images/Age.png"
import {ImageEllipse} from "../main/Main.tsx";

const Ellipse = [
    {
        gradient: "linear-gradient(180deg, #FFE6A2 0%, #F9D678 100%)",
        shadow: "-4px 1px 80px 0 rgba(246, 216, 135, 0.7)"
    }
]
export const DiscoverPartTwo = () => {
    return (
        <StyledDiscover>
            <StyledImageBlock>
                <ImageChart1 height={"395px"} width={"578px"} img={vk1}/>
                <ImageChart2 height={"395px"} width={"578px"} img={geo}/>
                <ImageChart3 height={"395px"} width={"578px"} img={age}/>
                <ImageChart4 height={"395px"} width={"578px"} img={gru}/>
                <ImageEllipse
                    width={"110px"}
                    height={"110px"}
                    top={"18px"}
                    left={"477px"}
                    gradient={Ellipse[0].gradient}
                    shadow={Ellipse[0].shadow}
                />
            </StyledImageBlock>
            <StyledContentBlock>
                <TypographyH2>
                    Serving information with security.
                </TypographyH2>
                <TypographyH4>
                    The source of powerful qorld and making future sure.
                    Its a straight forward software.
                    Paired with dynamic image of the actual tool for you.
                </TypographyH4>
                <TypographyH4>
                    Where possibilities are made possible.
                    We must have expand <span>Possibilities of better tomorrow.</span>
                    The directly secure of your network deliveing services.
                </TypographyH4>

            </StyledContentBlock>
        </StyledDiscover>
    );
};

const ImageChart4 = styled(Image)`
    position: absolute;
    z-index: 1;
    top: -90px;
    left: -189px;
`
const ImageChart3 = styled(Image)`
    position: absolute;
    z-index: 1;
    top: 217px;
    left: -100px;
`
const ImageChart2 = styled(Image)`
    position: absolute;
    z-index: 1;
    top: 153px;
    left: 230px;
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