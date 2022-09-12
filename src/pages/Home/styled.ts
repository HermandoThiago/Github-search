import styled from "styled-components";

export const StyledSearchContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    padding: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;

        button{
            margin-top: 10px;
            width: 100%;
        }

    }

`;

export const StyledAuthor = styled.span`
    cursor: pointer;
    font-style: italic;
    color: #FF7700;
    font-weight: bold;
`;
