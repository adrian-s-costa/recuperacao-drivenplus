import styled from "styled-components"
import SubOption from "./SubOption"
import { useContext, useState, useEffect } from "react"
import UserContext from '../contexts/UserContext'
import Loading from "./layout/Loading"
import axios from "axios"
import { useParams, Link } from "react-router-dom"


export default function Home(){
    
    const [loadingHabs, setloadingHabs] = useState(false)
    const {loginData, setLoginData, userData, setUserData, loading, IdSub, setIdSub} = useContext(UserContext)
    const [subsData, setSubsData] = useState([])
    const {subID} = useParams()

    const config = {
        headers: {Authorization: `Bearer ${userData.token}`}
    }

    
    useEffect(() => {

        setloadingHabs(true)

        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)

        promise.then((response)=>{
            setSubsData(response.data)
            setloadingHabs(false)
        })
        promise.catch((response)=>{
            console.log(response)
            setloadingHabs(false)
        })
    }, [] );
    
    
    
    return(
        <>
            {subsData.length === 0 ? <Loading/> :
                
                <SubsDiv>
                    <Title>Escolha o seu plano</Title>
                    {subsData.map((s) => (
                        <Link to={`/subscriptions/${s.id}`} style={{ textDecoration: 'none', color: '#FFFFFF'}}>
                            <SubOption img={s.image} text={'R$ ' + s.price} clickFunc={()=>setIdSub(s.id)}/>
                        </Link>
                    ))}
                </SubsDiv>
                
            }
        </>
    )
}


const SubsDiv = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
`

const Title = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin: 30px 0px 24px 0px;
`