
import styled from 'styled-components';

export default function SubOption(props){
    
    return(
        <OneSub>
            <ImgLogo src={props.img} alt='SubLogo'/>
            <h2>{props.text}</h2>
        </OneSub>
    )
}

const ImgLogo = styled.img`
    
    width: 139px;
    height: 95.13px;
`

const OneSub = styled.div`
    margin-bottom: 16px;
    width: 290px;
    height: 180px;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        transition: 0.5s;
        border-color: #FF4791;
    }

    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`