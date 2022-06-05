import styled from 'styled-components'
import UserContext from '../contexts/UserContext'
import { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function PopUp(props){

    const navigate = useNavigate()

    const {loginData, setLoginData, userData, setUserData, loading, IdSub, setIdSub, popUp, setPopUp, cardData, setCardData, membershipATM, setMembershipATM, perks, setPerks} = useContext(UserContext)
    
    const config = {
        headers: {Authorization: `Bearer ${userData.token}`}
    }

    function confirmMembership(){
        const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`, cardData, config )

        promise.then((response)=>{
            console.log(response.data)
            setMembershipATM(response.data)
            setPerks(response.data.membership.perks)
            navigate('/home')
        })
        promise.catch((response)=>{
            console.log(cardData)
            alert('Dados não puderam ser processados, tente novamente')
            
        })
    }


    return(
        <All>
            <PopUpDiv>
                <h3>
                Tem certeza que deseja assinar o plano {props.membership} (R$ {props.price})
                </h3>
                <div>
                    <button className='cancel' onClick={()=>setPopUp(false)}> Não </button>
                    <button className='confirm' onClick={()=>confirmMembership()}> SIM </button>
                </div>
            </PopUpDiv>
            <Close onClick={()=>setPopUp(false)}>X</Close>
        </All>
    )
}


const All = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0px;
    right: 0px;
`
const Close = styled.button`
    width: 28px;
    height: 28px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 3px;
    position: absolute;
    top: 24px;
    right: 20px;
    font-weight: bold;
    
    :hover{
        transition: 0.3s;
        background: gray;
    }
`

const PopUpDiv = styled.div`    
    position: absolute;
    width: 248px;
    height: 210px;
    left: 64px;
    top: 229px;
    background: #FFFFFF;
    border-radius: 12px;
    padding-top: 33px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;

    h3{
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        color: #000000;
    }

    div{
        display: flex;
        justify-content: center;
        margin-top: 45px;
    }

    button{
        width: 95px;
        height: 52px;
        left: 195px;
        top: 376px;
        background: #FF4791;
        border-radius: 8px;
        border: none;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;

        
    }

    .confirm{
        :hover{
            transition: 0.5s;
            background-color: #FFFFFF;
            color: #FF4791;
            border: solid 1px #FF4791;
        }
    }

    .cancel{
        background: #CECECE;
        margin-right: 14px;
        :hover{
            background-color: #FFFFFF;
            border: solid 1px #CECECE;
            transition: 0.3s !important;
            color: #FF4791 !important;
        }
    }
`