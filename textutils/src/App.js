import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alerts from './Components/Alerts';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },800);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled","Success");
      document.title = "TextUtils-Dark Mode";
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled","Success");
      document.title = "TextUtils-Light Mode";
    }
  }

  return (
    <div className="App">
      <Router>
        <NavBar mode = {mode} toggleMode = {toggleMode} ></NavBar>
      
        <Alerts showAlert={showAlert} alert = {alert} ></Alerts>
      
        <div className="container">
            <Routes>
              <Route exact path="/about" element={<About mode = {mode} toggleMode={toggleMode} />} /> 
              <Route exact path="/" element={<TextForm mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert} heading="Text to Analyze"/>} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;