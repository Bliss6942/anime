import React, { useContext, useEffect } from 'react'
import EditProfile from '../Components/Profile/EditProfile'
import ManageAccount from '../Components/Profile/ManageAccount'
import UserContext from '../Context/UserContext'
import { Link } from 'react-router-dom'
import PreloaderComponent from '../Components/Other/PreloaderComponent'
import ErrorPage from './ErrorPage'

const SettingsPage = ({currentWidth}) => {
  const {user, setUser} = useContext(UserContext) 

  const logOut = () => {
    setUser({isValid:false, isLoading:false})
    localStorage.removeItem("JWTAccess")
    localStorage.removeItem("JWTRefresh")
    location.pathname = "/"
  }

  useEffect(() => {
    document.title = "404NIME - Account settings"
  }, [])

  if(user?.isLoading) return <PreloaderComponent isLoaded={true} isSearch={false}/>
  else if(!user?.isValid) return <ErrorPage errorObj={{message: "401 - Unauthorized", response: {data: {message: "Log in to manage your account."}}}}/>
  return (
    <div className='opacity-0 animate-fadeInAnimate fill-mode-forward w-[1440px] mx-auto 1480res:w-full 1480res:px-5'>
        <h1 className='text-5xl font-medium mt-10 mb-3 500res:text-4xl'>Настройки</h1>
        <div className='text-text-gray [&>a]:duration-200'>
            <Link className='hover:text-white' to={"/"}>Главная</Link>
            <span> / </span>
            <Link className='hover:text-white' to={`/profile/${user?.login}`}>{user?.login}</Link>
            <span> / </span>
            <span>Настройки</span>
        </div>
        <EditProfile currentWidth={currentWidth}/> 
        <ManageAccount/>
        <div onClick={logOut} className='btn-base bg-red-500 text-white flex justify-center items-center gap-3 mt-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_403_2857)">
            <path d="M22.8289 9.17119L18.9499 5.29219C18.7613 5.11003 18.5087 5.00923 18.2465 5.01151C17.9843 5.01379 17.7334 5.11896 17.548 5.30437C17.3626 5.48978 17.2575 5.74059 17.2552 6.00279C17.2529 6.26498 17.3537 6.51758 17.5359 6.70619L21.4149 10.5852C21.5301 10.7027 21.6308 10.8337 21.7149 10.9752C21.6999 10.9752 21.6879 10.9672 21.6729 10.9672L5.98886 10.9992C5.72364 10.9992 5.46929 11.1045 5.28175 11.2921C5.09422 11.4796 4.98886 11.734 4.98886 11.9992C4.98886 12.2644 5.09422 12.5188 5.28175 12.7063C5.46929 12.8938 5.72364 12.9992 5.98886 12.9992L21.6669 12.9672C21.6949 12.9672 21.7179 12.9532 21.7449 12.9512C21.6562 13.1203 21.5437 13.2759 21.4109 13.4132L17.5319 17.2922C17.4363 17.3844 17.3602 17.4948 17.3078 17.6168C17.2554 17.7388 17.2278 17.87 17.2266 18.0028C17.2255 18.1356 17.2508 18.2672 17.301 18.3901C17.3513 18.513 17.4256 18.6247 17.5195 18.7186C17.6134 18.8125 17.725 18.8867 17.8479 18.937C17.9708 18.9873 18.1025 19.0126 18.2353 19.0114C18.368 19.0103 18.4993 18.9827 18.6213 18.9303C18.7433 18.8779 18.8536 18.8017 18.9459 18.7062L22.8249 14.8272C23.5747 14.0771 23.996 13.0598 23.996 11.9992C23.996 10.9385 23.5747 9.9213 22.8249 9.17119H22.8289Z" fill="white"/>
            <path d="M7 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H7C7.26522 2 7.51957 1.89464 7.70711 1.70711C7.89464 1.51957 8 1.26522 8 1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H7C7.26522 24 7.51957 23.8946 7.70711 23.7071C7.89464 23.5196 8 23.2652 8 23C8 22.7348 7.89464 22.4804 7.70711 22.2929C7.51957 22.1054 7.26522 22 7 22Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_403_2857">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <div>Выйти</div>
        </div>
    </div>
  )
}

export default SettingsPage