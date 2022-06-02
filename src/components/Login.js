import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import Input from './layout/Input';
import Logo from './Logo';
import axios from 'axios';
import UserContext from '../contexts/UserContext'
import Loading from './layout/Loading';
import Button from './layout/Button';


function Login(){
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)

    function setarDados(event){
        event.preventDefault()
        console.log(loginData)
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', loginData)
        
        promise.then(response => {
            setLoading(false)
            setUserData(response.data)
            console.log(userData)
            navigate('/home')
        })
        promise.catch(response=>{
            setLoading(false)
            alert('login ou senha incorretos, tente novamente')
        })
    }


    return(
        <LoginDiv>
            <Logo/>
            <form onSubmit={setarDados}>
                <Input type={'text'} placeholder={'E-mail'} set={(e) => setLoginData({ ...loginData, email: e.target.value})} value={loginData.email} disabled={loading?true:false}/>
                <Input type={'password'} placeholder={'Senha'} set={(e) => setLoginData({ ...loginData, password: e.target.value})} value={loginData.password} disabled={loading?true:false}/>
                <Button disabled={loading?true:false} clickFunc={()=>setLoading(true)} tag={loading?<Loading />:'ENTRAR'}></Button>
                <Link to={`/sign-up`}>
                    <LinkCadastro>
                        <span>Não possui conta? Cadastre-se</span>
                    </LinkCadastro>
                </Link>
            </form>
        </LoginDiv>
    )
    
}

const LoginDiv = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const LinkCadastro = styled.div`
    display: flex;
    justify-content: center;
    
    span{
        font-style: normal;
        margin-top: 25px;
        font-size: 13.976px;
        text-align: center;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
    span:hover{
        transition: 0.5s;
        color: #FF4791;
    }
`


export default Login