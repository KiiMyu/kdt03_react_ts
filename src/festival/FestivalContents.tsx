import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

export default function FestivalContents() {
    const location = useLocation();
    const item = location.state.item;

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-9/10 h-full flex flex-col justify-center items-center overflow-y-auto">
                <img src={item.MAIN_IMG_NORMAL} />
                <div className="flex flex-col justify-center items-center p-5">
                    <div className="text-6xl font-bold p-5">{item.MAIN_TITLE.indexOf('(') != -1 ? item.MAIN_TITLE.substring(0, item.MAIN_TITLE.indexOf('(')) : item.MAIN_TITLE}</div>
                    <div className="text-4xl p-3">{item.SUBTITLE}</div>
                    <div>{item.ITEMCNTNTS}</div>
                    <div className="flex flex-row jusfity-center p-5">
                        <a href={item.HOMEPAGE_URL} className="hover:cursor-pointer px-5 py-2 m-5 text-white bg-green-700 rounded-2xl">
                            홈페이지
                        </a>
                        <a href={`https://map.kakao.com/link/to/${item.MAIN_TITLE.indexOf('(') != -1 ? item.MAIN_TITLE.substring(0, item.MAIN_TITLE.indexOf('(')) : item.MAIN_TITLE},${item?.LAT},${item?.LNG}`}
                            className="hover:cursor-pointer bg-amber-300 px-5 py-2 m-5 rounded-2xl">카카오 지도보기</a>
                        <Link to="/festival" className="hover:cursor-pointer text-white bg-blue-700 font-bold px-5 py-2 m-5 rounded-2xl" state={item.GUGUN_NM}>
                            목록으로
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
