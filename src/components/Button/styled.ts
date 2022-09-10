import styled, { css } from "styled-components";

type color = 'primary' | 'secondary';

interface IButton {
    color: color;
}

export const StyledButton = styled.button<IButton>`
    height: 100%;
    border: 0;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        transform: translateY(-2px);
    }

    :active{
        transform: translateY(0);
    }

    svg{
        margin-right: 2px;
        font-size: 1.1rem;
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
