import styled from "styled-components";
import {Card} from "./card/Card.tsx";
import {TypographyH2, TypographyH3_4, TypographyH4} from "../../typography/Typography.ts";
import {Range} from "../../range/Range.tsx";
import {Image} from "../../image/Image.ts";
import vector from "../../../assets/images/Vector1.png"

const ItemsCard = [{
    title: "BASIC PLAN",
    price: "$0",
}, {
    title: "PREMIUM PLAN",
    price: "$130",
}, {
    title: "ULTIMATE PLAN",
    price: "$210",
}]
const pricingList = [
    {
        point: "Limited Acess Library",
        answer: "Yes"
    },
    {
        point: "100+ HTML UI Elements",
        answer: "Not"
    },
    {
        point: "Hotline Support 24/7",
        answer: "Not"
    },
    {
        point: "API & extension support",
        answer: "Yes"
    },
]


export const BestPricingPlan = () => {
    return (
        <StyledBestPricingPlan>
            <StyledTextContent>
                <TypographyH2>Best Pricing Plan</TypographyH2>
                <StyledTypographyH4>
                    Empowering the Internet Generation.
                    Driving the Communication Revolution.
                    Technology at the speed of life.
                    Empowered by Innovation.
                </StyledTypographyH4>
                <TypographyH3_4>Monthly Quarterly</TypographyH3_4>
                <TypographyH4>
                    Save up to 40%
                <Image img={vector}/>
                </TypographyH4>
            </StyledTextContent>
            <StyledPriceBar>
                <Range/>
            </StyledPriceBar>
            <ListPriceItems>
                {ItemsCard.map((el, index) =>
                    <Card
                        key={index}
                        pricingList={pricingList}
                        price={el.price}
                        title={el.title}/>)}
            </ListPriceItems>
        </StyledBestPricingPlan>
    );
};

const StyledTextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    //border: 1px solid;
    //height: 300px;

    ${TypographyH4} {
        position: relative;
        display: flex;
        justify-content: center;
    }

    ${Image} {
        position: absolute;
        left: 260px;
        top: -15px;
    }

    ${TypographyH3_4} {
        padding-top: 5px;
        padding-bottom: 20px;
        margin: 0;
        color: rgba(78, 89, 81, 1);
    }


`
const StyledTypographyH4 = styled.h4`
    width: 600px;
    //border: 1px solid;
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0;
    color: #021206;
`
const ListPriceItems = styled.div`
    margin-top: 88px;
    display: flex;
    justify-content: space-evenly;

    width: 100%;
    //border: 1px solid;
    height: 604px;

    //Card:not(:first-child) {
    //    padding-left: 30px;
    //}
`

const StyledPriceBar = styled.div`

    display: flex;
    justify-content: space-between;

    width: 1146px;
    //border: 1px solid;
    height: 74px;
`

const StyledBestPricingPlan = styled.div`
    display: flex;
    //justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    margin-bottom: 115px;
    //border: 1px solid;
    height: 1054px;
    //margin-top: 110px;
    //gap: 74px;
`