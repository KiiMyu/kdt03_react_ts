
const BallType = {
    0 : {
        count : "bg-blue-500 text-white"
    },
    1 : {
        count : "bg-red-500 text-white"
    },
    2 : {
        count : "bg-yellow-500 text-white"
    }, 
    3 : {
        count : "bg-purple-500 text-white"
    },
    4 : {
        count : "bg-black text-white"
    },
}

export default function TailBall({number}) {
    const ballColor = BallType[Math.floor(number / 10)]
    console.log(number)

    return (
        <div className={`w-20 h-20 rounded-full ${ballColor.count} flex justify-center items-center m-2`}>
            {number}
        </div>
    )
}