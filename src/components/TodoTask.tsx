import { observer } from "mobx-react-lite";
import React, { ChangeEvent } from "react";
import { ITodoState } from "../App";
import "../down.png";
import "../up.png";
interface IProps {
    todo: ITodoState;
    change: (completed: boolean) => void;
    makeHigher: () => void;
    makeLower: () => void;
}



const todoTask = ({ todo, change, makeHigher, makeLower}: IProps) => {



    const checkTodo = (event: ChangeEvent<HTMLInputElement>) => {
        change(event.target.checked);
    }
    return (
        <li className="item"> 
            <input className="check" type="checkbox" onChange={ checkTodo } />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }} >{todo.text}</span>
            <button className="but" onClick={makeHigher}> up </button> <button className="but" onClick={makeLower}> down </button>
        </li>
    );
}

export const TodoTask = observer(todoTask);