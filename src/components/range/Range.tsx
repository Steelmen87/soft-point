import styled from "styled-components";


export const Range = () => {
    return (
        <StyledRange type={"range"} />
    );
};
const StyledRange = styled.input`
    width: 100%;
    accent-color:rgba(78, 218, 172, 1);
    background-blend-mode: luminosity;
    //box-shadow: 1px 5px 35px 0 rgba(215, 21, 21, 0.5);
`