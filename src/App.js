import React from 'react'; 
import {Routes,Route} from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/sign';
import SimplePage from './simplepage/SimplePage';
import Pluspage from './pluspage/pluspage';
import MissionPage from './missonpage/MissionPage';

function App() { 
    return(
        <div className="App">
            <Routes>
                <Route path ="/missonpage" element = {<MissionPage/>}/>
                <Route path ="/pluspage" element = { <Pluspage/>} />    
                <Route path ="/simplepage" element = { <SimplePage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Sign />} />
            </Routes>
        </div>
);
}

export default App;