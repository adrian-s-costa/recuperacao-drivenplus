import styled from "styled-components"
import SubOption from "./SubOption"
import g1 from '../assets/images/g1.png'
import g2 from '../assets/images/g2.png'
import g3 from '../assets/images/g3.png'

export default function Home(){
    return(
        <SubsDiv>
            <Title>Escolha o seu plano</Title>
            <SubOption img={g1} text={'R$ 39,99'}/>
            <SubOption img={g2} text={'R$ 69,99'}/>
            <SubOption img={g3} text={'R$ 69,99'}/>
        </SubsDiv>
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
