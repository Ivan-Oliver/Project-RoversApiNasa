import React, { FC, useCallback } from 'react'
import {
  ButtonBoxes,
  RedirectMessage,
  WelcomeSignup,
  WelcomeLogin,
  WelcomeContainer,
  ContainerRight,
  InformationMessage,
  ContainerLeft,
  TitleContainer,
  TextContainer,
  TitlePag,
} from './styles'

const Welcome: FC = () => {

  return (
    <WelcomeContainer>
      <TitlePag>Intelectelar.com</TitlePag>
      <ContainerRight>
      <TitleContainer>Welcome</TitleContainer>
      <TextContainer>We are a young company formed by a great team of professionals, with a great experience in the sector. We belong to Intelectelar, a prestigious business group in the interplanetary sector, with more than a decade of experience and solvency. Proud of our achievements, looking for constant improvement.
      </TextContainer>
      </ContainerRight>
      <ContainerLeft>
        <InformationMessage>Welcome to Intelectelar</InformationMessage>
      <RedirectMessage>Please enter your login data or register </RedirectMessage>
      <ButtonBoxes>
        <WelcomeSignup to="/login">Login</WelcomeSignup>
        <WelcomeLogin to="/signup">Signup</WelcomeLogin>
      </ButtonBoxes>
      </ContainerLeft>
    </WelcomeContainer>
  )
}

export default Welcome
