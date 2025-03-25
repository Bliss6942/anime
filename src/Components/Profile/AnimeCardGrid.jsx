import React from 'react'
import AnimeCard from '../Other/AnimeCard'

const AnimeCardGrid = ({isShow, listArray, type, deleteOneFromUserList, isDeleteLoading, isEditing}) => {
  return (
    <div className={`${isShow ? "" : "hidden"} w-[1440px] mx-auto 1480res:w-full 1480res:px-5 grid grid-cols-7 gap-5
    flex-shrink-0 justify-items-center h-min 1320res:grid-cols-5 1000res:grid-cols-4
    800res:grid-cols-3 700res:grid-cols-4 600res:grid-cols-3 500res:grid-cols-4 450res:grid-cols-3 330res:grid-cols-2`}
    >
        {listArray?.map(el => <div key={el.animeId} className='relative'>
            <span onClick={() => !isDeleteLoading ? deleteOneFromUserList(type, el.animeId) : null}
                className={`${isEditing ? "opacity-100" : "!opacity-0 pointer-events-none"} ${isDeleteLoading ? "animate-pulse !cursor-not-allowed " : ""} flex cursor-pointer active:scale-90 duration-100
                absolute top-2 right-2 500res:w-10 500res:h-10 w-14 h-14 bg-def-gray justify-center items-center rounded-full 1320res:flex`}>
                <svg className='w-7 h-7 500res:w-5 500res:h-5' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 5.99994C17.8124 5.81247 17.5581 5.70715 17.293 5.70715C17.0278 5.70715 16.7735 5.81247 16.586 5.99994L12 10.5859L7.41397 5.99994C7.22644 5.81247 6.97213 5.70715 6.70697 5.70715C6.44181 5.70715 6.1875 5.81247 5.99997 5.99994C5.8125 6.18747 5.70718 6.44178 5.70718 6.70694C5.70718 6.9721 5.8125 7.22641 5.99997 7.41394L10.586 11.9999L5.99997 16.5859C5.8125 16.7735 5.70718 17.0278 5.70718 17.2929C5.70718 17.5581 5.8125 17.8124 5.99997 17.9999C6.1875 18.1874 6.44181 18.2927 6.70697 18.2927C6.97213 18.2927 7.22644 18.1874 7.41397 17.9999L12 13.4139L16.586 17.9999C16.7735 18.1874 17.0278 18.2927 17.293 18.2927C17.5581 18.2927 17.8124 18.1874 18 17.9999C18.1874 17.8124 18.2928 17.5581 18.2928 17.2929C18.2928 17.0278 18.1874 16.7735 18 16.5859L13.414 11.9999L18 7.41394C18.1874 7.22641 18.2928 6.9721 18.2928 6.70694C18.2928 6.44178 18.1874 6.18747 18 5.99994Z" fill="white"/>
                </svg>
            </span>
            <AnimeCard info={el} type={"anime"}/>
        </div>)}
    </div>

  )
}

export default AnimeCardGrid