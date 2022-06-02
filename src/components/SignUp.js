import styled from 'styled-components';
import { useContext, useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from './layout/Input';
import Button from './layout/Button';
import axios from 'axios';
import UserContext from '../contexts/UserContext'
import Loading from './layout/Loading';

export default function Register(){

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({email:'', name:'', cpf:'', password:''})
    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)
   


    function setarDados(event){
        event.preventDefault();
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', registerData)
    
        promise.then(response=>{
            console.log(loginData)
            const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', loginData)
            promise.then(response=>{
                setLoading(false)
                console.log(loginData)
                console.log(response.data)
                setUserData(response.data)
                navigate('/home')
            })
            promise.catch(response=>{
                setLoading(false)
                console.log(loginData)
            })
        })

        promise.catch(response=>{
            setLoading(false)
            alert('Algum dado está incorreto, tente novamente')
        })
    }

    return(
        <SignDiv>
            <form onSubmit={setarDados}>
                <Input type={'text'} placeholder={'Nome'} set={(e) => setRegisterData({ ...registerData, name: e.target.value})} value={registerData.name} disabled={loading?true:false} />
                <Input type={'text'} placeholder={'CPF'} set={(e) => setRegisterData({ ...registerData, cpf: e.target.value})} value={registerData.cpf} disabled={loading?true:false} />
                <Input type={'email'} placeholder={'E-mail'} set={(e) => setRegisterData({ ...registerData, email: e.target.value})} value={registerData.email}  disabled={loading?true:false} />
                <Input type={'password'} placeholder={'Senha'} set={(e) => setRegisterData({ ...registerData, password: e.target.value})} value={registerData.password} disabled={loading?true:false} />
                <Button clickFunc={() => setLoginData({...loginData, email: registerData.email, password: registerData.password}, setLoading(true))} disabled={loading?true:false} tag={loading?<Loading/>:'CADASTRAR'}/>

                <Link to={`/`}>
                    <LinkCadastro>
                        <span>Já tem uma conta? Faça login</span>
                    </LinkCadastro>
                </Link>
            </form>
        </SignDiv>
    )
}

const SignDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

`

const LinkCadastro = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    
    span{
        font-style: normal;
        margin-top: 25px;
        font-size: 13.976px;
        text-align: center;
        text-decoration-line: underline;
        color: #ffffff;
    }
    span:hover{
        transition: 0.5s;
        color: #FF4791;
    }
`