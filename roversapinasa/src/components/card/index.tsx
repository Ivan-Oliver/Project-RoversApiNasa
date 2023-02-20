import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Description, Image } from './styles'
import { Props } from './types'

const Card: FC<Props> = ({
    nasaId,
    sol,
    image,
    onClick,
    id
}) => {
    

   
    return (
        <>
        <Container>
            <Description>Id: {nasaId}</Description>
            <Description>Sol: {sol}</Description>
            <Image src={image} />
        </Container>
        </>
    )
}

export default Card