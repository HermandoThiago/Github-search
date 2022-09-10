import styled, { css } from "styled-components";

type color = 'primary' | 'secondary';

interface IButton {
    color: color;
}

export const StyledButton = styled.button<IButton>`
    border: 0;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;

    :hover{
        transform: translateY(-2px);
    }

    :active{
        transform: translateY(0);
    }

    ${(props) => {
        if(props.color === 'primary'){
            return css`
                background-color: #2A2550;
            `
        }else if(props.color === 'secondary'){
            return css`
                background-color: #E04D01;
            `
        }
    }}

`;
