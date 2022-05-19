import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';

export interface ITodoState {
    completed: boolean;
    text: string;
}


const App: FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<ITodoState[]>([]);
    


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTodo(event.target.value);
    }
    const addTask = (): void => {
        const todoState = {
            completed: false,
            text: todo
        }
        setTodoList([...todoList, todoState]);
        setTodo("");
    }
    /*const model = useRef(new LikeCounterModel()).current;*/

    return (
        
        <div className="container">
            {/*<LikeCounter model={model}/>*/}
            {/*<LikeCounter model={model}/>*/}
            <div className="todolist">
                <div className = "todotop">
                    <h1>Todo list</h1>
                    <input className="input" type="text" value={todo} placeholder="Type your task" onChange={handleChange} />
                    <button className="add-button" onClick={ addTask }>Add</button>
                </div>
                <div className="items">
                    <ul className="list">
                        {todoList.map((task: ITodoState, key: number) => {
                            return <TodoTask todo={task} />;
                        })}
                        

                    </ul>
                </div>
            </div>
        </div>

  );
}

export default App;
