import React, { useState } from 'react';
import './App.css';
import LikeCounter from './components/LikeCounter';



const App = () => {
    
    const [likes, setLikes] = useState(42);
    function addLike() {
        setLikes(likes + 1);
    }
    function dislike() {
        setLikes(likes - 1);
    }
    return (
        <div className="container">
            <LikeCounter initialLikes={42}/>
            <div className="todolist">
                <div className = "todotop">
                    <h1>Todo list</h1>
                    <input className = "input" type="text" placeholder="Type your task" />
                    <button className="add-button">Add</button>
                </div>
                <div className="items">
                    <p id = "test">Test</p>
                    <ul className="list">
                        <li>Wash a car</li> <input className="check" type="checkbox" />
                        <li> Clean my room</li> <input className="check" type="checkbox" /> 
                        <li> End todo list </li> <input className="check" type="checkbox" />
                    </ul>
                </div>
            </div>
        </div>

  );
}

export default App;
