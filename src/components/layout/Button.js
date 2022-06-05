import styled from 'styled-components';


export default function Button(props){
    return(
        <>
            <ButtonStyle color={props.color} margintop={props.margintop}>
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
        background: ${(props) => props.color};
        border-radius: 8px;
        margin-top: ${(props) => props.margintop};
        color: white;
        font-size: 14px;
        text-align: center;
        font-weight: bold;
    }
    button:hover{
        transition: 0.5s;
        background-color: #0E0E13;
        color: ${(props) => props.color};
        border: solid 1px ${(props) => props.color};
    }
    button:disabled{
        background: #ccc;
    }
`