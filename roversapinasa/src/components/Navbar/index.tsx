import { FC, useCallback } from 'react'
import { Props } from './types'
import { useNavigate } from 'react-router-dom';
import { ButtonLogout } from '../../components/Navbar/styles'
import { CustomNavbar } from './styles'



const Navbar: FC<Props> = ({type='list'}) => {

    const navigate = useNavigate()

    const goToBack = useCallback(() => {
        navigate('/home')
    }, [navigate])
    
    const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.localStorage.clear()
        navigate('/login')
    }, [navigate])


    return (
        <CustomNavbar>
            <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
        </CustomNavbar>
    )
}

export default Navbar