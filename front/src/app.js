import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './app.css';
import Superviseurs from './Components/Superviseurs/superviseurslogin.jsx';
import Administration from './Components/Administration/administrationlogin.jsx';
import Encadrant from './Components/Encadrant/encadrantlogin';
import Formulaire from './Components/formulaireadministration.jsx';
import Jury from './Components/Jury/jurylogin.jsx';
import FormulaireSuperviseurs from './Components/Superviseurs/formulairesuperviseurs';
import FormulaireEncadrant from './Components/Encadrant/formulaireencadrant';
import FormulaireJury from './Components/Jury/formulairejury';



function App() { 
    return(
    
<div>
<Routes>
    <Route  path="/" element={<Administration/>}  />
    <Route  path="/Formulaire" element={<Formulaire/>}  />
    <Route  path="/superviseurs" element={<Superviseurs/>}  />
    <Route  path="/Encadrant" element={<Encadrant/>}  />
    <Route  path="/Jury" element={<Jury/>}  />
    <Route  path="/FormulaireSuperviseurs" element={<FormulaireSuperviseurs/>}  />
    <Route  path="/FormulaireEncadrant" element={<FormulaireEncadrant/>}  />
    <Route  path="/FormulaireJury" element={<FormulaireJury/>}  />
</Routes>
</div>
    );
}


export default App;
