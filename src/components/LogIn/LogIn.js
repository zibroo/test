import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { mainContext } from '../../context/MainContext';

const LogIn = () => {
    const { adminLogin, adminPassword } = useContext(mainContext)
    const history = useHistory()
    const [adminAccount, setAdminAccount] = useState({
        login: '',
        password: ''
    })

    function handleInputs(e) {
        let obj = {
            ...adminAccount,
            [e.target.name]: e.target.value
        }
        setAdminAccount(obj);
    }








    return (
        <div className="container">
            <div className="login-wrapper">
                <span className="title">Вход</span>
                <div className="login-form">
                    <form>
                        <input name='login' value={adminAccount.login} onChange={(e) => {

                            handleInputs(e)
                        }} type='text' placeholder="логин" />
                        <input name='password' value={adminAccount.password} onChange={(e) => {

                            handleInputs(e)
                        }} type='password' placeholder="пароль" />
                        {
                            adminAccount.login === adminLogin && adminAccount.password === adminPassword ?
                                (<button
                                    onClick={
                                        (e) => {
                                            e.preventDefault()
                                            history.push('/profile')
                                        }
                                    }
                                >Войти</button>) :
                                (<button
                                    disabled
                                >Войти</button>)
                        }


                    </form>
                </div>

            </div>
        </div>
    );
};

export default LogIn;