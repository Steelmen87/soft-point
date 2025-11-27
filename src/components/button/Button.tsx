import styled from "styled-components";

type PropsType = {
    grandColor?:string
    position?:string
    top?:string
    left?:string
}
export const Button = styled.button<PropsType>`
    position: ${props=>props.position || ""};
    opacity: 1;
    top: ${props=>props.top || "35px"};
    left: ${props=>props.left || "1253px"};
    border-radius: 6px;
    background-color: ${props=>props.grandColor || "#F44545"};
    //padding-top: 15px;
    //padding-right: 30px;
    //padding-bottom: 15px;
    //padding-left: 30px;
    //gap: 10px;

`
