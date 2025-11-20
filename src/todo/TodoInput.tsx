import TailButton from '../components/TailButton'
import { useRef, useEffect } from 'react'
// import { useSetAtom } from 'jotai'
// import { todosAtom } from './AtomsTodo'
import { supabase } from "../supabase/client";

interface TodoType {
    id: number,
    completed: boolean,
    text: string,
}

interface TodoItemProps {
    todos : TodoType[],
    getTodos : () => void

}

export default function TodoInput({ todos, getTodos } : TodoItemProps) {
    const inRef = useRef(null as unknown as HTMLInputElement);

    const handleAdd = async () => {
        if (inRef.current.value == "") {
            alert("값을 입력해 주세요.")
            inRef.current.focus();
            return;
        }
        const {/* data,*/ error } = await supabase
            .from('todos')
            .insert([
                { text: inRef.current.value, completed: false },
            ]);
        if (error) {
            console.error('Error adding todo:', error);
        } else {
            getTodos();
            inRef.current.value = "";
            inRef.current.focus();
        }
    }

    useEffect(() => {
        if (todos == undefined || todos.length == 0) {
            return
        }
        localStorage.setItem("todo", JSON.stringify(todos))
        console.log(localStorage.getItem("todo"))
    }, [todos])

    return (
        <div className="max-w-3xl flex flex-row justify-center items-center w-full my-4">
            <input type="text" ref={inRef} className="flex-1 border p2 border-gray-200 " />
            <TailButton color="blue" caption="추가" onClickEvent={handleAdd} />
        </div>
    )
}
