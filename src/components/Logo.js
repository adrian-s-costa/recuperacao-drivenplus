import logo from '../assets/images/logo.png' 
import styled from 'styled-components';

export default function Logo(){
    
    return(

        <ImgLogo src={logo} alt='logo'/>
    )
}

const ImgLogo = styled.img`
    width: 299px;
    height: 49px;
    margin: 0px 0px 100px 10px;
`
