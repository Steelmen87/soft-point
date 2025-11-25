import styled from "styled-components";

type PropsType = {
    img: any
}
export const LogoImage = styled.image<PropsType>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: 149px;
    height: 36px;
    object-fit: cover;
    
`