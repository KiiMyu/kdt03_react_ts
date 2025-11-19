import React from 'react'

export default function TailSelect({id, title, opk, opv, onHandle}) {

    // console.log(opk)
    // console.log(opv)

    return (
        <div className="p-2">
            <form className="max-w-sm mx-auto">
                <div htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{title}</div>
                <select id={id} onChange={onHandle} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="">선택하세요</option>
                    {/* <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option> */}
                    {/* {
                        Object.keys(jsonData).map((item, index) => {
                            return <option key={"option"+jsonData+index} value={jsonData[item]}>{jsonData[item]}</option>
                        })
                    } */}
                    {
                        opk.map((item, index) => <option key={"option"+item} value={opk[index]}>{opv[index]}</option>)
                    }
                </select>
            </form>
        </div>
    )
}
