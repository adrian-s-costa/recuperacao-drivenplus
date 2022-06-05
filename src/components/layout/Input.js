import styled from 'styled-components';

export default function Input(props){
    const {type, placeholder, value, set, disabled} = props
    return(
        <>
            <LoginForms width={props.width} margintop={props.margintop} margin={props.margin}>
                <input type={type} placeholder={placeholder} onChange={set} value={value} required disabled={disabled}/>          
            </LoginForms>
        </>
        
    )
}

const LoginForms = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input{
        background: #ffffff;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        width: ${(props) => props.width};
        margin: ${(props) => props.margin};
        height: 45px;
        margin-top: ${(props) => props.margintop};
        font-size: 14px;
        color: #7E7E7E;
        padding-left: 14px;
    }
    input:disabled{
        background: #ccc;
    }
`