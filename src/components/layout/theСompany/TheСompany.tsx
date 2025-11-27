import styled from "styled-components";
import {Image} from "../../image/Image.ts";
import google from "../../../assets/images/company/Google_logo.png"
import avast from "../../../assets/images/company/Avast.png"
import ebay from "../../../assets/images/company/ebay.png"
import payPal from "../../../assets/images/company/paypal.png"
import hub from "../../../assets/images/company/Style-Guide.png"
const images = [google,avast,ebay,payPal,hub]
export const TheCompany = () => {
    return (
        <StyledCompanyBlock>
                {images.map((el,index)=> <Image key={index} img={el} width={"170px"} height={"57px"}/>)}
        </StyledCompanyBlock>
    );
};
const StyledCompanyBlock = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 163px;
    width: 100%;
    background-color: rgba(142, 230, 201, .1);
    padding: 0 115px;
`