import styled from "styled-components";
import {Typography, TypographyButtonText, TypographyGreen, TypographyH3} from "../../typography/Typography.ts";
import {Button} from "../../button/Button.tsx";
import google from "../../../assets/images/Google.png"
import laptop from "../../../assets/images/laptop image.png"
import tel from "../../../assets/images/pngegg 1.png"
import apple from "../../../assets/images/Apple.png"
import {Image} from "../../image/Image.ts";

const Ellipse13 = [
    {
        gradient: "linear-gradient(180deg, #FFE6A2 0%, #F9D678 100%), linear-gradient(180deg, #FEDF8B 0%, #FFC16B 100%)",
        shadow: "-4px 1px 80px 0 rgba(246, 216, 135, 0.7)"
    },{
        gradient: "linear-gradient(176.15deg, #8EE7CA 19.68%, #87D2BA 96.85%)",
        shadow: "0px 4px 70px 0 rgba(155, 215, 195, 0.8)"
    },
]
export const Main = () => {
    return (
        <StyledMain>
            <StyledForm>
                <Typography>
                    Develop Your Life With
                    <TypographyGreen> One Step...</TypographyGreen>
                </Typography>
                <TypographyH3>
                    Pushing the possibilities of the internet. Good for
                    the last software.<span> Make it A software night.</span>
                </TypographyH3>
                <StyledInputBlock>
                    <StyledInput placeholder={"Enter your email"}/>
                    <Button position={"absolute"} top={"7px"} left={"332px"}>
                        <TypographyButtonText padding={" 10px 33px"}>
                            Send
                        </TypographyButtonText>
                    </Button>
                </StyledInputBlock>
                <StyleImageBlock>
                    <Image img={google} width={"130px"} height={"30px"}/>
                    <Image img={apple} width={"130px"} height={"30px"}/>
                </StyleImageBlock>
            </StyledForm>
            <StyledImageBlock>
                <ImageTelephone img={tel} width={"148px"} height={"295px"}/>
                <ImageLaptop img={laptop} width={"873px"} height={"571px"}/>
                <ImageEllipse gradient={Ellipse13[0].gradient} shadow={Ellipse13[0].shadow}/>
                <ImageEllipse
                    top={"350px"}
                    left={"710px"}
                    gradient={Ellipse13[1].gradient}
                    shadow={Ellipse13[1].shadow}
                />
            </StyledImageBlock>
        </StyledMain>
    );
};
type ImageEllipseProps = {
    gradient?: string
    shadow?: string
    top?: string
    left?: string
}
const ImageEllipse = styled.div<ImageEllipseProps>`
    width: 136px;
    height: 136px;
    border-radius: 70px;
    background: ${props => props.gradient};
    position: absolute;
    box-shadow: ${props => props.shadow};
    top: ${props => props.top || "-30px"};
    left: ${props => props.left || "119px"};
`
const ImageLaptop = styled(Image)`
    position: absolute;
    z-index: 1;
    top: -48px;
    left: 27px;
`
const ImageTelephone = styled(Image)`
    position: absolute;
    z-index: 2;
    top: 160px;
    left: 101px;
`
const StyledImageBlock = styled.div`
    position: relative;
    width: 746px;
    height: 440px;
    //border: 1px solid;
`
const StyleImageBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    Image + Image {
        margin-left: 30px;
    }
`
const StyledInputBlock = styled.div`
    position: relative;
    width: 472px;
    margin-top: 30px;
    margin-bottom: 35px;
`
const StyledInput = styled.input`
    box-shadow: -5px 5px 45px 0 rgba(2, 18, 6, 0.15);
    border-radius: 6px;
    padding: 20px 300px 20px 24px;
    background-color: rgba(255, 255, 255, 1);
    border: none;

    &::placeholder {
        font-weight: 400;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0;
    }
`
const StyledMain = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid;
    width: 1155px;
    height: 500px;
    margin: 110px 0;
`
const StyledForm = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    //border: 1px solid;
    width: 510px;
`