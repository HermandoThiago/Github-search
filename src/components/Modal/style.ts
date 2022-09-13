import styled, { keyframes } from "styled-components";

interface IStyledContainerModal {
    show: boolean;
}

export const FrameUp = keyframes`
    0% { opacity: 0; margin-top: 50px; }
    100% { opacity: 1; margin-top: 0; }
`;

export const StyledContainerModal = styled.div<IStyledContainerModal>`
    width: 100vw;
    height: 100vh;
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 20px;
    background-color: #2A255055;

    hr {
        width: 100%;
        margin-top: 10px;
        color: #2A255080;
    }

`;

export const StyledContainerSearch = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    svg{
        font-size: 1.6rem;
        cursor: pointer;
    }
`;

export const StyledModal = styled.div`
    max-width: 800px;
    width: 100%;
    height: 500px;
    background-color: #251D3A;
    padding: 20px 20px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${FrameUp};
    animation-duration: 1s;
`;

export const StyledContainerRepos = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 5px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`;

export const StyledMessage = styled.p`
    margin-top: 20px;
`;