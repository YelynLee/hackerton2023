import React from 'react'; 
import {Routes,Route} from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/sign';
import Home from './mainpage/Home';
import SimplePage from './simplepage/SimplePage';
import Pluspage from './pluspage/pluspage';

function App() { 
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element = {<Home />} />
                <Route path ="/pluspage" element = { <Pluspage/>} />    
                <Route path ="/simplepage" element = { <SimplePage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Sign />} />
            </Routes>
        </div>
);
}

export default App;