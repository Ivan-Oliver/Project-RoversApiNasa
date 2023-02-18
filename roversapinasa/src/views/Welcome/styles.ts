import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WelcomeContainer = styled.div`
  
  height: 100vh;

`

export const WelcomeMessage = styled.h1`
    margin-left:
    color:${({ theme }) => theme.colors.black};
    font-family: Arial, Helvetica, sans-serif;
    font-size:54px;
`

export const RedirectMessage = styled.p`
color:${({ theme }) => theme.colors.black};
font-size:20px`

export const ButtonBoxes = styled.div`
    display:block;
    margin:20px;
`

export const WelcomeButton = styled(Link)`
  padding: 10px 20px;
  font-size:20px;
  background-color: gray;
  color:${({ theme }) => theme.colors.black};;  border-radius: 5px;
  text-decoration: none;
  margin: 0 10px;
`
