import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, FC, useRef } from 'react';
import './App.css';
import { TodoTask } from './components/TodoTask';

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
    readonly makeHigher = (index: number) => {
        if (index !== 0) {
            const temp = this.todoList[index];
            this.todoList[index] = this.todoList[index - 1]
            this.todoList[index - 1] = temp;
        }
    }
    readonly makeLower = (index: number) => {
        if (index !== this.todoList.length - 1) {
            const temp = this.todoList[index];
            this.todoList[index] = this.todoList[index + 1];
            this.todoList[index + 1] = temp;
        }
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
                                makeHigher={() => model.makeHigher(index)}
                                makeLower={() => model.makeLower(index)}
                            />;
                        })}
                        
                    
                    </ul>
                </div>
            </div>
        </div>

  );
}

export const App = observer(RenderApp);