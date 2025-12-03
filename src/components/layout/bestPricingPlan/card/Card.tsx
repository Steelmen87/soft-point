import styled from "styled-components";
import {TypographyButtonText, TypographyH2, TypographyH3_4} from "../../../typography/Typography.ts";
import {StyledItem, StyledList} from "../../discover/Discover.tsx";
import {Button} from "../../../button/Button.tsx";
type Props = {
    title:string
    price:string
    pricingList:Array<{point:string,answer:string}>
}
export const Card = ({title,price,pricingList}:Props) => {
    return (
        <StyledItemCard>
            <TypographyH3_4>
                {title}
            </TypographyH3_4>
            <TypographyH2>
                {price}
            </TypographyH2>
            {pricingList.map((el, index) => <StyledPricingList
                key={index}
                last={index === 3}>
                <StyledList>
                    <StyledItem>
                        {el.point}
                    </StyledItem>
                </StyledList>
                <StyledText>
                    {el.answer}
                </StyledText>
            </StyledPricingList>)}
            <Button grandColor={"white"}>
                <TypographyButtonText paddingLR={"76px"} padding={"13px"} color={"red"}>
                    Buy Plan
                </TypographyButtonText>
            </Button>
        </StyledItemCard>
    );
};
const StyledText = styled.div`
    padding-right: 30px;
`
type StyledPricingListProps = {
    last?: boolean
}
const StyledPricingList = styled.div<StyledPricingListProps>`
    display: flex;
    border-bottom: ${props => props.last && "1px solid rgba(1, 18, 18, .1)"};
    margin-bottom: ${props => props.last && "42px"};

    ${StyledList} {
        padding-left: 50px;
    }

    justify-content: space-between;
    padding-top: 18px;
    border-top: 1px solid rgba(1, 18, 18, .1);
    //border-bottom: 1px solid rgba(1, 18, 18, .1);

`
const StyledItemCard = styled.div`
    display: flex;
    //justify-content: space-between;
    flex-direction: column;

    width: 360px;
    height: 604px;
    border-radius: 15px;
    border: 1px solid rgba(1, 18, 18, 0.1);

    ${TypographyH2} {
        margin-bottom: 37px;
    }

    &:hover {
        box-shadow: 0 20px 100px 0 rgba(2, 18, 6, 0.15);

        ${Button} {
            background-color: rgba(245, 84, 84, 1);
        }
    }

    &:hover {
        ${Button} {
            ${TypographyButtonText} {
                color: white;
            }
        }
    }

    ${Button} {
        border: 2px solid rgba(244, 69, 69, .1);
        align-self: center;


    }
`