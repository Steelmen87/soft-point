import styled from "styled-components";
import {TypographyButtonText, TypographyH2, TypographyH4} from "../../typography/Typography.ts";
import book from "../../../assets/images/Book.png";
import {Image} from "../../image/Image.ts";
import {Button} from "../../button/Button.tsx";

export const GetOurSoftware = () => {
    return (
        <StyledGetOurSoftware>
            <StyledContentBlock>
                <TypographyH2>
                    Get our software
                </TypographyH2>
                <TypographyH4>
                    The source of powerful qorld and making your future sure.
                    It’s a straight forward software for you.
                </TypographyH4>
                <TypographyH4>
                    The source of powerful qorld and making future sure.
                    Its a straight forward software. Paired with dynamic image of the actual tool and the performance.
                </TypographyH4>
                <Button grandColor={"rgba(244, 69, 69, 1)"}>
                    <TypographyButtonText padding={"15px"} paddingLR={"20px"}>
                        Download now
                    </TypographyButtonText>
                </Button>
            </StyledContentBlock>
            <StyledImageBlock>
                <ImageChart1 height={"643px"} width={"965px"} img={book}/>
            </StyledImageBlock>
        </StyledGetOurSoftware>
    );
};
const ImageChart1 = styled(Image)`
    position: absolute;
    //z-index: 1;
    top: -103px;
    left: -97px;

`

const StyledImageBlock = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    //border: 1px solid;
`

const StyledGetOurSoftware = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 527px;
    width: 100%;
    background-color: rgba(142, 230, 201, .1);
    padding: 0 115px;
    margin-bottom: 110px;
`
const StyledContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 440px;
    text-align: left;
    //border: 1px solid;
    height: 464px;
    //margin-top: 110px;

    ${Button} {
        align-self: flex-start;
    }

    ${TypographyH4} {
        margin: 20px 0;
    }

`