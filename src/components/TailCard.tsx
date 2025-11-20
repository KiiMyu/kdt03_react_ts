import reactImg from '../assets/react.svg'

interface TailCardProps {
    imageSrc : string,
    title : string,
    description : string
}
export default function TailCard({ imageSrc, title, description } : TailCardProps) {
    //let tags: React.ReactElement | React.ReactElement[] = [] // 태그를 쓰는 경우, ReactElement : JSX 를 변수에 저장.ㄴ

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-3 m-3">
            <div className="flex justify-center">
                <img className="rounded-t-lg object-cover" src={imageSrc === null || imageSrc === '' ? reactImg : imageSrc} alt="" />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </div>
        </div>
    )
}
