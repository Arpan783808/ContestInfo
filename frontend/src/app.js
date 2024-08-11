import React from 'react';
import {Route,Routes} from "react-router-dom";
import { Contest } from './components/contest.jsx';
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Leaderboard from './components/leaderboard.js';
import "./app.css";
function App(){
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Contest />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/contest" element={<Contest/>}/>
                <Route path="/leaderboard" element={<Leaderboard/>}/>
            </Routes>
        </div>
    )
}
export default App;