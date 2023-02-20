import styled from "styled-components";

export const App = styled.div`
 text-align: center;
 background-color: ${({ theme }) => theme.colors.grey700};
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${({ theme }) => theme.colors.black};
`

export const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

`

