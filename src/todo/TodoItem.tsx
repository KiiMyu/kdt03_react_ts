import TailButton from '../components/TailButton'
import { useState, useEffect } from 'react'
import { supabase } from "../supabase/client";

export default function TodoItem({ todo, todos, setTodos, getTodos }) {
    //const [todos, setTodos] = useAtom(todosAtom)
    //const [todos, setTodos] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleToggle = async () => {
        // const newItem = todos.map( t => t.id == todo.id ? {...t, completed : !todo.completed} : t)
        // setTodos(newItem)

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
        // const newItem = todos.map(t => t.id == todo.id ? { ...t, text: t.text = editText } : t)
        // setTodos(newItem)
        // setIsEdit(false)
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

    // useEffect(() => {
    //     if(todos.length == 0) {
    //         return
    //     }
    //     console.log(todos)
    //     setTodo(todos)
    // },[todos])

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
