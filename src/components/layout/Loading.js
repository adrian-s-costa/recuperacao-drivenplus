import styled from 'styled-components';

export default function Loading(){
    return <LoadingDiv><div className="lds-dual-ring"></div></LoadingDiv>
}

const LoadingDiv = styled.div`
    .lds-dual-ring{
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after{
        content: " ";
        display: block;
        width: 16px;
        height: 16px;
        margin: 10px 0px 0px 25px;
        border-radius: 50%;
        border: 4px solid;
        border-color: #FF4791 transparent #FF4791 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`