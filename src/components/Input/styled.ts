import styled from "styled-components";

export const StyledInput = styled.input`
    width: 400px;
    background-color: #2A2550;
    border: 0;
    padding: 11px 20px;
    font-weight: lighter;
    border-radius: 6px;
    margin-right: 5px;

    :focus{
        outline: 0;
    }

    @media screen and (max-width: 600px){
        width: 100%;
    }

`;
