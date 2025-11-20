
const BallType = [
    "bg-blue-500 text-white",
    "bg-red-500 text-white",
    "bg-yellow-500 text-white",
    "bg-purple-500 text-white",
    "bg-black text-white"
] as const;

interface TailBallProps {
    num: number
}
export default function TailBall({ num }: TailBallProps) {
    console.log(num)

    return (
        <div className={`w-20 h-20 rounded-full ${/*ballColor.count*/ BallType[Math.floor(num / 10)]} flex justify-center items-center m-2`}>
            {num}
        </div>
    )
}