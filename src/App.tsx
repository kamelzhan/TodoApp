import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, FC, useRef } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';

export interface ITodoState {
    completed: boolean;
    text: string;
}

export class TodoListModel {
    constructor() {
        makeObservable(this, { todoList: observable, todo: observable, addTask: action, change: action, setTodo: action });
    }
    readonly addTask = () => {
        const todoState = {
            completed: false,
            text: this.todo
        }
        this.todoList.push(todoState);
        this.todo = "";
    }
    readonly setTodo = (event: ChangeEvent<HTMLInputElement>) => {
        this.todo = event.target.value;
    }
    readonly change = (todoState: ITodoState, completed: boolean) => {
        todoState.completed = completed;
    }

    todo = "";
    todoList: ITodoState[] = [];


}

const RenderApp: FC = () => {
    const model = useRef(new TodoListModel()).current;

    //const [todo, setTodo] = useState<string>("");
    //const [todoList, setTodoList] = useState<ITodoState[]>([]);
    


    //const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    //    setTodo(event.target.value);
    //}
    //const addTask = (): void => {
    //    const todoState = {
    //        completed: false,
    //        text: todo
    //    }
    //    setTodoList([...todoList, todoState]);
    //    setTodo("");
    //}
    /*const model = useRef(new LikeCounterModel()).current;*/

    return (
        
        <div className="container">
            {/*<LikeCounter model={model}/>*/}
            {/*<LikeCounter model={model}/>*/}
            <div className="todolist">
                <div className = "todotop">
                    <h1>Todo list</h1>
                    <input className="input" type="text" value={model.todo} placeholder="Type your task" onChange={model.setTodo} />
                    <button className="add-button" onClick={ model.addTask }>Add</button>
                </div>
                <div className="items">
                    <ul className="list">
                        {model.todoList.map((task: ITodoState, index: number) => {
                            return <TodoTask
                                key={index}
                                todo={task}
                                change={(completed) => model.change(task, completed)}
                            />;
                        })}
                        

                    </ul>
                </div>
            </div>
        </div>

  );
}

export const App = observer(RenderApp);