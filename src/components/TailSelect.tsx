import React from 'react'


interface TailSelectProps {
    id : string,
    title : string,
    opk : string[],
    opv : Array<string>,
    onHandle? : (e:React.MouseEvent<HTMLButtonElement>) => void
}
export default function TailSelect({id, title, opk, opv, onHandle} : TailSelectProps) {

    // console.log(opk)
    // console.log(opv)

    return (
        <div className="p-2">
            <form className="max-w-sm mx-auto">
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
                <select id={id} onChange={() => onHandle} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="">선택하세요</option>
                    {
                        opk.map((item, index) => <option key={"option"+item} value={opk[index]}>{opv[index]}</option>)
                    }
                </select>
            </form>
        </div>
    )
}
