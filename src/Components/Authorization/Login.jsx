import React, { useContext, useState } from 'react'
import AuthorizationInput from './AuthorizationInput'
import axios from 'axios'
import UserContext from '../../Context/UserContext'
import { useSearchParams } from 'react-router-dom'
import PopUpModal from '../Other/PopUpModal'

const Login = ({isShow, close, toggleAuth}) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [errorText, setErrorText] = useState("")
    const [successText, setSuccessText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const {user} = useContext(UserContext)

    const signUpHandler = () => {
        if(!password || !login) return
        setIsLoading(true)
        axios.post("https://four04nime.onrender.com/users/auth/login", {
            login: login,
            password: password
        })
        .then((res) => {
            setSuccessText("Вы успешно авторизованы")
            setErrorText("")
            setIsLoading(false)
            localStorage.setItem("JWTAccess", res.data.accessToken)
            localStorage.setItem("JWTRefresh", res.data.refreshToken)
            setSearchParams({})
            setTimeout(() => location.reload(), 1000)
        })
        .catch((res) => {
            console.log(res);
            setErrorText(res?.response?.data?.message)
            setSuccessText("")
            setIsLoading(false)
        })
    }

  return (
    <PopUpModal isShow={isShow} isLoading={isLoading} isUserLoading={user?.isLoading} close={close}>
        <h4 className='font-medium text-[28px] text-white mb-4 370res:text-xl'>Вход</h4>
        <div className={`${errorText ? "" : "hidden"} bg-red-500 rounded-md p-3 my-2`}>{errorText}</div>
        <div className={`${successText ? "" : "hidden"} bg-green-500 rounded-md p-3 my-2`}>{successText}</div>
        <form onSubmit={e => e.preventDefault()}>
            <AuthorizationInput type={"text"} placeholder={"cyberpsycho_login"} title={"Login"} setValue={setLogin} value={login}/>
            <AuthorizationInput type={"password"} placeholder={"Your password"} title={"Password"} setValue={setPassword} value={password}/>
            <button type={"submit"} onClick={signUpHandler} className='w-full btn-base bg-white text-def-black mt-3 cursor-pointer 370res:text-sm'>Войти</button>
        </form>
        <div className='flex gap-2 mt-5 items-center'>
            <p className='text-white 370res:text-sm'>Еще нет аккаунта?</p>
            <span className='text-green-700 cursor-pointer flex-shrink-0' onClick={toggleAuth}>Регистрация</span>
        </div>
    </PopUpModal>
  )
}

export default Login