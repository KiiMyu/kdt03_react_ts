import TailButton from '../components/TailButton'
import { useState } from 'react'
import { supabase } from "../supabase/client";

interface TodoType {
    id: number,
    completed: boolean,
    text: string,
}

interface TodoItemProps {
    todo : TodoType,
    getTodos : () => void

}

export default function TodoItem({ todo, getTodos } : TodoItemProps) {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [editText, setEditText] = useState<string>(todo.text)

    const handleToggle = async () => {

        const { error } = await supabase
            .from('todos')
            .update({ completed: !todo.completed })
            .eq('id', todo.id);
        if (error) {
            console.error('Error toggling todo:', error);
        } else {
            getTodos();
        }
    }

    const handleSave = async () => {

        const { error } = await supabase
            .from('todos')
            .update({ text: editText })
            .eq('id', todo.id);
        if (error) {
            console.error('Error toggling todo:', error);
        } else {
            getTodos();
            setIsEdit(false)
        }
    }

    const handleCancel = () => {
        setEditText(todo.text)
        setIsEdit(false)
    }

    const handleDelete = async () => {
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('id', todo.id);
        if (error) {
            console.error('Error deleting todo:', error);
        } else {
            getTodos();
        }
    }

    return (
        <div className="flex flex-row justify-center max-w-3xl w-full my-4">
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} className="mr-3" />
            {isEdit ? <input type="text" value={editText} onChange={(e) => { setEditText(e.target.value) }} className="flex-1 p-2 border border-gray-200 rounded-sm" />
                : <span className="flex flex-1 p-4">
                    {editText}
                </span>
            }
            {
                isEdit ?
                    <>
                        <TailButton color="orange" caption="저장" onClickEvent={handleSave} />
                        <TailButton color="blue" caption="취소" onClickEvent={handleCancel} />
                    </>
                    : <>
                        <TailButton color="orange" caption="수정" onClickEvent={() => setIsEdit(true)} />
                        <TailButton color="blue" caption="삭제" onClickEvent={handleDelete} />
                    </>
            }
        </div>
    )
}
