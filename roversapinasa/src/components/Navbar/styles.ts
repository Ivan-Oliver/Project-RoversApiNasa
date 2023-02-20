import styled from "styled-components";

export const CustomNavbar = styled.nav`
  color: ${({ theme }) => theme.colors.grey100};
    display:flex;
    justify-content:space-between;
    height:60px;
    width: 100%;
`

export const ButtonLogout = styled.button`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
   border-radius: 5px;
   cursor:pointer;
   margin: 16px;
   padding:5px;
   &:hover{
       background-color: ${({ theme }) => theme.colors.black};
       color: white;
       font-weight: bold;
       padding: 6px;
       text-align: center;
       width: 100px;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
      background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 6px #666;
  transform: translateY(4px);
    }
    
    }  
`