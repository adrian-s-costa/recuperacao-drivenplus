import styled from 'styled-components';


export default function Button(props){
    return(
        <>
            <ButtonStyle>
                <button type='submit' onClick={props.clickFunc} disabled={props.disabled}>{props.tag}</button>
            </ButtonStyle>
        </>
    )
}

const ButtonStyle = styled.div` 
    display: flex;
    justify-content: center;
    button{
        width: 298px;
        height: 52px;
        border: none;
        background: #FF4791;
        border-radius: 8px;
        margin-top: 24px;
        color: white;
        font-size: 14px;
        text-align: center;
    }
    button:hover{
        transition: 0.5s;
        background-color: #0E0E13;
        color: #FF4791;
        border: solid 1px #FF4791;
    }
    button:disabled{
        background: #ccc;
    }
`