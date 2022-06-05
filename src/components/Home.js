import styled from "styled-components"
import SubOption from "./SubOption"
import { useContext, useState, useEffect } from "react"
import UserContext from '../contexts/UserContext'
import Loading from "./layout/Loading"
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"
import { IoMdContact } from "react-icons/io";
import Button from "./layout/Button"

export default function Subscription(){
    
    const {loginData, setLoginData, userData, setUserData, loading, IdSub, setIdSub, membershipATM, setMembershipATM, perks, setPerks} = useContext(UserContext)
    const navigate = useNavigate()
    const config = {
        headers: {Authorization: `Bearer ${userData.token}`}
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`, config)

        promise.then((response)=>{
            setMembershipATM(response.data)
            setPerks(response.data.perks)
        })
        promise.catch((response)=>{
            console.log(response)
        })
    }, [] );

    function cancelMembership(){
        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)
        promise.then((response)=>{
            alert('Seu plano foi cancelado com sucesso')
            navigate('/subscriptions')
        })
        promise.catch((response)=>{
            console.log(response)
        })
    }

    return(
        <SubDiv>
            <nav className="topbar">
                <img className="logo" src={membershipATM.image} alt="logo"/>
                <div className="icon">
                    <IoMdContact/>
                </div>
            </nav>
            <header>
                <h3>Olá, {userData.name}</h3>
            </header>
            <section>
                {perks.map((perk)=>(
                    <Button color = {'#FF4791'} tag={perk.title} margintop={'8px'} clickFunc={()=>window.open(perk.link)}/>
                ))}
            </section>
            <SubFooter>
                <Link to={`/subscriptions`} style={{ textDecoration: 'none', color: '#FFFFFF'}}>
                    <Button color = {'#FF4791'} tag={'Mudar Plano'}/>
                </Link>
                <Button color = {'#FF4747'} margintop={'8px'} tag={'Cancelar plano'} clickFunc={cancelMembership}/>
            </SubFooter>
        </SubDiv>
    )
}

const SubDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;

    .logo{
        position: absolute;
        width: 75px;
        height: 51px;
        left: 38px;
        top: 32px;
    }
    .icon{
        color: white;
        font-size: 40px;
        padding: 22px 22px 0px 0px;
    }
    .topbar{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    header{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-bottom: 53px;
        padding-top: 12px;
    }

    h3{
        font-family: Roboto;
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
    }
`
const SubFooter = styled.footer`
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 12px;
`