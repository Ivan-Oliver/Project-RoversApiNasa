import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WelcomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey900};
`
 export const TitlePag = styled.h1`
position: absolute;
top: 0px;
left: 90vh;
font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 30px;
font-weight:bold;
color:white;
&:hover{
  color: ${({ theme }) => theme.colors.black};
 text-transform: uppercase; 
}
 `

export const ContainerRight = styled.div`
border:solid 1px white;
border-radius: 7px;
background-color: ${({ theme }) => theme.colors.grey1000};
padding: 0vh 1vh 35vh;
height: 20vw;
width: 70vh;
`
export const TitleContainer = styled.h1`
color:white;
font-family: Arial, Helvetica, sans-serif;
font-weight:lighter;
margin-left: 10px;
position: relative;
top: 0px;
`

export const TextContainer = styled.p`
margin-top: 50px;
margin-left: 10px;
color:white;
font-weight:lighter;
font-size: 20px;

`

export const ContainerLeft = styled.div`
border:solid 1px white;
border-radius: 7px;
background-color: ${({ theme }) => theme.colors.grey1000};
padding: 0vh 1vh 35vh;
height: 20vw;
width: 70vh;
`

export const RedirectMessage = styled.p`
color:${({ theme }) => theme.colors.white700};
position: absolute;
left: 145vh;
top: 22vh;
`

export const ButtonBoxes = styled.div`
    position: absolute;
    top: 40vh;
    flex-direction:column;
    margin-left: 90px;
    display: flex;
`

export const WelcomeSignup = styled(Link)`
 position: relative;
 background-color:${({ theme }) => theme.colors.white100};
    border: none;
    font-size: 16px;
    color:${({ theme }) => theme.colors.black};
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover{
       background-color: ${({ theme }) => theme.colors.black};
       color: white;
       font-size: 16px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       width: 200px;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
      background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 10px #666;
  transform: translateY(4px);
    }
    
    }  
`
export const WelcomeLogin = styled(Link)`
 position: relative;
 background-color:${({ theme }) => theme.colors.white100};
    border: none;
    padding: 5px;
    font-size: 16px;
    color:${({ theme }) => theme.colors.black};
    margin: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover{
       background-color: ${({ theme }) => theme.colors.black};
       color: white;
       font-size: 16px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       width: 200px;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
      background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 10px #666;
  transform: translateY(4px);
    }
    }  
`
export const InformationMessage = styled.h1`
color:${({ theme }) => theme.colors.white100};
position: absolute;
left: 145vh;
font-family: Arial, Helvetica, sans-serif;
font-weight:lighter;
`

