import styled from "styled-components";

export const App = styled.div`
  text-align: center;
  background-color: black;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.grey100};
`

export const Description = styled.p`
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    font-family: sans-serif;
    margin-bottom: 10px;
`

export const Image = styled.img`
    width: 220px;
    height: 250px;
    
`

export const Container = styled.div`
 background-color: ${({ theme }) => theme.colors.grey1000};
  border: 1px solid black;
  padding: 35px;
  width: 10em;
  margin: 10px;
  border-radius: 20px;
  height: 18em;
  color: ${({ theme }) => theme.colors.grey100};
`

export const ButtonDetails = styled.button`
cursor: pointer;
border: none;
border-radius: 10px;
font-size:20px;  
padding: 10px;
margin: 15px;
background-color: ${({ theme }) => theme.colors.grey700};
color: ${({ theme }) => theme.colors.black};

`
