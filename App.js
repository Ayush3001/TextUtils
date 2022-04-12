
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
   
} from 'react-router-dom';

function App() {
  const [mode, setmode] =useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
     msg:message,
     typ:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("dark mode has been enabled","success");
      document.title='text editor-dark mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      document.title='text editor-light mode';

    }
  }
  return (
    <>
    <Router>
<Navbar title="TEXT Editor" aboutEditor="aboutEditor" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm mode={mode} heading="enter the text here"/>}/>
        </Routes>
</div>
</Router>
    </>
  );
}

export default App;
