import styled from "styled-components";

type PropsType = {
    img: any
    width?:string
    height?:string
    shadow?:boolean
}
export const Image = styled.image<PropsType>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: ${props => props.width || "149px"};
    height: ${props => props.height || "36px"};
    box-shadow: ${props=>props.shadow && "1px 5px 35px 0 rgba(215, 21, 21, 0.5)"};
    object-fit: cover;
    
`