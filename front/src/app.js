import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './app.css';
import Administration from './Components/administrationlogin.jsx';
import Encadrant from './Components/encadrantlogin';
import Formulaire from './Components/formulaire.jsx';
import Jury from './Components/jurylogin';
import Superviseurs from './Components/superviseurslogin';




function App() { 
    return(
    
<div>
<Routes>
    <Route  path="/" element={<Administration/>}  />
    <Route  path="/Formulaire" element={<Formulaire/>}  />
    <Route  path="/Superviseurs" element={<Superviseurs/>}  />
    <Route  path="/Encadrant" element={<Encadrant/>}  />
    <Route  path="/Jury" element={<Jury/>}  />
</Routes>
</div>
    );
}


export default App;
