import TailBall from "../components/TailBall"
import TailButton from "../components/TailButton"
import { useState } from "react";
import { useEffect } from "react";


export default function Lotto() {

    // const [randNum, setRandNum] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [tags, setTags] = useState([]);

    const shake = () => {
        setTags(tags => {
            const newArr = [];
            for (let i = 0; i < 6; i++) {
                let num = Math.floor(Math.random() * 45) + 1;
                if(newArr.includes(num)) {
                    i--;
                    continue;
                } else {
                    newArr[i] = num;
                }

            }
            newArr.sort((a, b) => a - b);

            while(newArr.length < 7) {
                let num = Math.floor(Math.random() * 45) + 1;
                if(newArr.includes(num)) {
                    continue;
                } else {
                    newArr.push(num);
                }
            }

            const tagArr = newArr.map((number, index) => { return <TailBall key={`ball${index}`} number={number}/>}) // TODO : map 구조 복습해야함.
            return tagArr; 
            // 나중에 let set1 = new set() 으로도 만들어 볼 수 있음.
        })
    }

    useEffect(() => { // 최초 1회만 실행할 수 있는 훅.
        shake()
    }, [])
    

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <p className='text-5xl'>Lotto</p>
            <div className='flex flex-row m-5 justify-center items-center'>
                {/* <TailBall number={randNum[0]} />
                <TailBall number={randNum[1]} />
                <TailBall number={randNum[2]} />
                <TailBall number={randNum[3]} />
                <TailBall number={randNum[4]} />
                <TailBall number={randNum[5]} />
                <p className='text-5xl'> + </p>
                <TailBall number={randNum[6]} /> */}
                {tags.slice(0, 6)}
                <p className='text-5xl'> + </p>
                {tags[6]}
            </div>
            {/* <button className='w-1/10 bg-blue-500 rounded text-white' onClick={shake}>섞기</button> */}
            <TailButton color="blue" caption="추첨" onClickEvent={shake} /> {/*기존 버튼 재사용시! */}
        </div>
    )
}