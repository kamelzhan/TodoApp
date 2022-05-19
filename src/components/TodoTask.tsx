import React, { ChangeEvent } from "react";
import { ITodoState } from "../App";

interface IProps {
    todo: ITodoState;
}

const TodoTask = ({ todo }: IProps) => {


    const doneTodo = (event: ChangeEvent<HTMLInputElement>) => {
        todo.completed = event.target.checked;
    }
    return (
        <li className = "item">
            <input className="check" type="checkbox" onChange={doneTodo } />
            <span>{ todo.text }</span>
        </li>
    );
}

export default TodoTask