import styled from 'styled-components';
import { BiArrowBack } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import Input from './layout/Input';
import Button from './layout/Button';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import UserContext from '../contexts/UserContext'
import { useState, useContext, useEffect } from 'react';
import Loading from './layout/Loading';
import PopUp from './PopUp';

export default function Subscription(){

    const [loadingHabs, setloadingHabs] = useState(false)
    const {loginData, setLoginData, userData, setUserData, loading, IdSub, setIdSub, popUp, setPopUp, cardData, setCardData} = useContext(UserContext)
    const [subData, setSubData] = useState({})
    const [perks, setPerks] = useState([])
    
    const config = {
        headers: {Authorization: `Bearer ${userData.token}`}
    }

    useEffect(() => {

        console.log(IdSub)

        setCardData({membershipId: IdSub})

        setloadingHabs(true)

        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${IdSub}`, config)

        promise.then((response)=>{
            setSubData(response.data)
            setPerks(response.data.perks)
            console.log(response.data)
            setloadingHabs(false)
        })
        promise.catch((response)=>{
            console.log(response)
            setloadingHabs(false)
        })
    }, [] );
    
    return (
        <>
            {subData.length === 0 ? <Loading/> :
                <SubsDiv>
                    <nav>
                        <Link to={`/subscriptions`} style={{ textDecoration: 'none', color: '#FFFFFF'}}>
                            <div>
                                <BiArrowBack/>
                            </div>
                        </Link>
                    </nav>
                    <section className='logoTitle'>
                        
                            <div>
                                <img src={subData.image} alt='logo' />
                            </div>
                        
                        <h2>{subData.name}</h2>
                    </section>
                    <article>
                        <section className='benefits'>
                            <div className='secTitle'>
                                <span>
                                    <HiOutlineClipboardList />
                                </span>
                                <h5>Benefícios:</h5>
                            </div>
                            <ul>
                                {perks.map((perk)=>(
                                    <li>{perk.title}</li>
                                ))}
                            </ul>
                        </section>
                        <section className='price'>
                            <div className='secTitle second'>
                                <span>
                                    <FaMoneyBillWave />
                                </span>
                                <h5>Preço:</h5>
                            </div>
                            <h6>R$ {subData.price} cobrados mensalmente</h6>
                        </section>
                    </article>
                    <article>
                        <div><Input margintop={'8px'} width={'303px'} placeholder={'Nome impresso no cartão'} set={(e) => setCardData({ ...cardData, cardName: e.target.value})} value={cardData.cardName} required={true}/></div>
                        <div><Input margintop={'8px'} width={'303px'} placeholder={'Digitos no cartão'} set={(e) => setCardData({ ...cardData, cardNumber: e.target.value})} value={cardData.cardNumber} required={true}/></div>
                        <div className='smallInput'>
                            <Input margintop={'8px'} width={'145px'} margin={'0px 9px 0px 0px'} placeholder={'Codigo de seguranca'} set={(e) => setCardData({ ...cardData, securityNumber: e.target.value})} value={cardData.securityNumber} required={true}/>
                            <Input margintop={'8px'} width={'145px'} placeholder={'Validade'} set={(e) => setCardData({ ...cardData, expirationDate: e.target.value})} value={cardData.expirationDate} required={true}/>
                        </div>
                        
                        <Button color={'#FF4791'} margintop={'12px'} tag={'ASSINAR'} clickFunc={()=>setPopUp(true)} type={'submit'}/>
                    </article>
                {popUp?<PopUp membership={subData.name} price={subData.price}/>:null}
                </SubsDiv>
            }
        </>
    )
}

const SubsDiv = styled.div`
    font-family: Roboto;
    color: white;
    position: relative;
    padding-left: 40px;
    height: 100%;
    padding-top: 87px;

    nav{
        font-size: 32px;
        position: absolute;
        left: 22px;
        top: 22px;
    }
    .logoTitle{
        
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        img{
            width: 139.38px;
            height: 95.13px;
        }

        h2{
            margin-top: 12px;
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 32px;
            color: #FFFFFF;
        }

        .ul{
            margin-top: 10px;
        }

    }

    article{
        font-weight: 400;
        font-size: 16px;
        margin-top: 23px;
    }

    span{
        color: #FF4791;
        width: 15px;
        height: 12px;
        margin-right: 3px;
    }

    .secTitle{
        display: flex;
        margin-bottom: 10px;
    }

    .second{
        margin-top: 14px;
    }

    .smallInput{
        display: flex;
        justify-content: center;
    }
`