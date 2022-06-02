import styled from 'styled-components';

export default function Input(props){
    const {type, placeholder, value, set, disabled} = props
    return(
        <>
            <LoginForms>
                <input type={type} placeholder={placeholder} onChange={set} value={value} required disabled={disabled}/>          
            </LoginForms>
        </>
        
    )
}

const LoginForms = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    
    input{
        background: #ffffff;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        width: 303px;
        height: 45px;
        margin-top: 18px;
        font-size: 14px;
        color: #7E7E7E;
        padding-left: 14px;
    }
    input:disabled{
        background: #ccc;
    }
`