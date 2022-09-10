import styled from "styled-components";

export const StyledSearchContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCardsContainer = styled.div`
    max-width: 800px;
    width: 100%;
    height: 350px;
    margin-top: 30px;
    padding: 5px;
    border-radius: 6px;
    border: 1px solid #2A2550;
    overflow-y: scroll;
`;

export const StyledAuthor = styled.span`
    cursor: pointer;
    font-style: italic;
    color: #FF7700;
    font-weight: bold;
`;
