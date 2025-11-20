const BTStyle = {
    blue :  {
        base : "bg-blue-500",
        hover : "hover:bg-blue-900",
        divback : "bg-blue-200"
    },
    orange :  {
        base : "bg-orange-500",
        hover : "hover:bg-orange-900",
        divback : "bg-orange-200"
    },
        lime :  {
        base : "bg-lime-500",
        hover : "hover:bg-lime-900",
        divback : "bg-lime-200"
    }
} as const

type TailButtonColor = keyof typeof BTStyle

interface TailButtonProps {
    color : TailButtonColor,
    caption : string,
    onClickEvent? : (e:React.MouseEvent<HTMLButtonElement>) => void
}
export default function TailButton({color, caption, onClickEvent} : TailButtonProps) { 
    const btstyle = BTStyle[color];

    return (
        <button className={`${btstyle.base} text-white rounded ${btstyle.hover} hover:font-bold px-4 py-2 cursor-pointer m-2`} onClick={onClickEvent}>
            {caption}
        </button>
    )
}