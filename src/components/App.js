import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import UserContext from "../contexts/UserContext";
import "../assets/css/reset.css"
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Subscription from './Subscription';
import Subscriptions from './Subscriptions';
import GlobalStyle from './styles/createGlobalStyle'


export default function App (){

    const [loginData, setLoginData] = useState({email: '', password: ''})
    const [userData, setUserData] = useState({})
    const contextValue = { loginData, setLoginData, userData, setUserData }

    return(
        <BrowserRouter>
            <GlobalStyle/>
            <UserContext.Provider value={contextValue}>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/sign-up" element={<SignUp />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/subscriptions" element={<Subscriptions />}/>
                    <Route path="/subscriptions/:idSub" element={<Subscription />}/>
                </Routes>
            </UserContext.Provider>    
        </BrowserRouter>
    )
}