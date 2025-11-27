import styled from "styled-components";
import {Image} from "../../image/Image.ts";
import logo from "../../../assets/images/Logo.png"
import {Links} from "../../link/Link.ts";
import {Button} from "../../button/Button.tsx";
import {TypographyButtonText} from "../../typography/Typography.ts";

const lists = ["Feature", "Download", "Pricing"]
export const Header = () => {
    return (
        <StyledHeader>
            <Image img={logo}/>
            <StyledListLink>
                {lists.map((el, index) => {
                    return <li key={index}><Links>{el}</Links></li>
                })}
            </StyledListLink>
            <StyledBlockButton>

                <TypographyButtonText color={"#021206"}>
                   {/*<a>Login</a>*/}
                    Login
                </TypographyButtonText>

                <Button>
                    <TypographyButtonText padding={" 15px 30px"}>
                        Sign up
                    </TypographyButtonText>
                </Button>
            </StyledBlockButton>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid;
    width: 1155px;
    height: 58px;
`
const StyledListLink = styled.ul`
    display: flex;
    align-items: center;
    //border: 1px solid;
    &:hover {
        cursor: pointer;
    }
    li + li {
        margin-left: 55px;
    }
`
const StyledBlockButton = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border: 1px solid;

    ${Button} {
        margin-left: 12px;
    }
`