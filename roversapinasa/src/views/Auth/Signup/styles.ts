import styled, { css } from "styled-components";
import { Form as DefaultForm } from 'formik'


export const FormContainer = styled.div`


`

export const Form = styled(DefaultForm)`

`
export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  &:not(:first-child) {
    margin-top: 16px;
  }
`

export const Input = styled.input<{ $hasError?: boolean }>`
padding:10px;
margin:10px;
border-radius: 5px;
${({ $hasError, theme }) =>
        $hasError ? theme.colors.danger : theme.colors.grey900};
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
        $hasError &&
        css`
      color: ${theme.colors.danger};
    `}
`
export const Label = styled.label`
 

`

export const FormButton = styled.button`
  
`

export const FormMessage = styled.p`
 
`

export const Error = styled.span`
  
`


