import styled from "styled-components";

type PropsType = {
    grandColor?:string
}
export const Button = styled.button<PropsType>`
    angle: 0 deg;
    opacity: 1;
    top: 35px;
    left: 1253px;
    border-radius: 6px;
    background-color: ${props=>props.grandColor || "#F44545"};
    //padding-top: 15px;
    //padding-right: 30px;
    //padding-bottom: 15px;
    //padding-left: 30px;
    //gap: 10px;

`
