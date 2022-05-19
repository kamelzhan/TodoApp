import React, { ChangeEvent } from "react";
import { ITodoState } from "../App";

interface IProps {
    todo: ITodoState;
    change: (completed: boolean) => void
}

const TodoTask = ({ todo, change }: IProps) => {



    const checkTodo = (event: ChangeEvent<HTMLInputElement>) => {
        change(event.target.checked);
    }
    return (
        <li className="item" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <input className="check" type="checkbox" onChange={ checkTodo } />
            <span>{ todo.text }</span>
        </li>
    );
}

export default TodoTask