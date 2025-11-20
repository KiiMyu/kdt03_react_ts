import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
// import { useAtomValue } from "jotai"
// import { todosAtom, completedAtom, incompletedAtom } from "./AtomsTodo"
import { useState, useEffect } from "react"
import { supabase } from "../supabase/client"
// import type { TodoData } from "./todoData" // 선언해서 가져와서 쓸 수 있음.

interface TodoType {
    id: number,
    completed: boolean,
    text: string,
}

export default function Todolist() {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [completed, setCompleted] = useState<number>(0);
    const [incompleted, setIncompleted] = useState<number>(0);

    useEffect(() => {
        try {
            getTodos()
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        setCompleted(todos.filter(todo => todo["completed"]).length)
        setIncompleted(todos.filter(todo => !todo["completed"]).length)
    }, [todos])

    const getTodos = async () => {
        const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('id', {ascending: false})

        console.log(data)

        if( error ) {
            console.error('Error fetching todos : ', error)
        } else {
            setTodos(data || [])
        }
    }

    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="w-full max-w-3xl text-2xl font-bold text-center mt-10">
                할 일 목록 ( Supabase Client )
            </h1>
            <div className="w-full max-w-3xl p-5 my-5 bg-amber-50 border border-amber-300
            focus:outline-none focus:ring-2 focus:ring-blue-600">
                전채: {todos.length}개 | 완료: {completed}개 | 미완료: {incompleted}개
            </div>
            <TodoInput todos={todos} getTodos={getTodos}/>
            {
                todos && todos.map(item => <TodoItem key={item["id"]} todo={item} getTodos={getTodos}/>)
            }
        </div>
    )
}
