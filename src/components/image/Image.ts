import styled from "styled-components";

type PropsType = {
    img: any
    width?:string
    height?:string
}
export const Image = styled.image<PropsType>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: ${props => props.width || "149px"};
    height: ${props => props.height || "36px"};
    object-fit: cover;
    
`