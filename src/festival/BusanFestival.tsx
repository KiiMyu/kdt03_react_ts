import React from 'react'
import TailCard from '../components/TailCard'
import TailButton from '../components/TailButton';
import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function BusanFestival() {

    let searchText = useRef();
    const [jsonData, setJsonData] = useState();
    const [selectCountry, setSelectCountry] = useState('');
    const [gulist, setGulist] = useState([]);

    const location = useLocation();
    const gugunItem = location.state;

    const RenewCard = async () => {

        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${import.meta.env.VITE_ACCIDENT_API}&pageNo=1&numOfRows=45&resultType=json&type=json`

        try {
            let resp = await fetch(url);
            let data = await resp.json();

            console.log(data);
            setJsonData(data);
        } catch (error) {
            console.log(error);
        }
    }

    const ChangeSelectValue = (e) => {
        e.preventDefault();
        console.log("value Change! " + e.target.value);
        setSelectCountry(e.target.value);
    }

    const ClickCardEvent = () => {

    }

    useEffect(() => {
        RenewCard();
    }, [])

    useEffect(() => {
        if (jsonData == undefined || jsonData.length == 0) {
            console.log("data not initialize!")
            return;
        }
        let tm = jsonData.getFestivalKr.item.map(item => item.GUGUN_NM);
        tm = [...new Set(tm)].sort();
        setGulist(tm);
        if (gugunItem != '') {
            setSelectCountry(gugunItem);
        } else {
            setSelectCountry(tm[0]);
        }
    }, [jsonData])

    return (
        <div className='h-screen flex flex-col overflow-y-hidden'>
            <h1 className='text-center text-4xl p-10'>부산 축제정보 서비스</h1>
            <div className='w-9/10 flex flex-row justify-center items-center bg-amber-200 rounded-2xl px-2 mx-auto mb-4'>
                <select value={selectCountry} ref={searchText} onChange={ChangeSelectValue} className='border border-gray-800 m-2 bg-white w-3/10 text-center' >
                    {
                        gulist && gulist.map((item, index) => <option key={`GUGUN${index}`} value={item}>{item}</option>)
                    }
                </select>
            </div>
            <div className='p-5 grid grid-cols-3 overflow-y-scroll'>
                {
                    jsonData && jsonData.getFestivalKr.item.map((item, index) => (
                        selectCountry == '' || selectCountry == item.GUGUN_NM ?
                            <Link to="/festival/content" key={item.UC_SEQ + index} state={{ item }} >
                                <TailCard key={index} imageSrc={item.MAIN_IMG_THUMB}
                                    title={item.MAIN_TITLE.indexOf('(') != -1 ? item.MAIN_TITLE.substring(0, item.MAIN_TITLE.indexOf('(')) : item.MAIN_TITLE}
                                    description={item.ITEMCNTNTS.length > 30 ? item.ITEMCNTNTS.substring(0, 100) + "..." : item.ITEMCNTNTS}
                                    clickEvent={ClickCardEvent} /> </Link> :
                            ''

                    ))
                }
            </div>
        </div>
    )
}
