import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("light"); //whether dark mode is enabled or not.
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // }

  const toggleMode = (cls) => {
    console.log(cls);
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#07265f';
      // showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      //  setInterval(() => {
      //   document.title = "TextUtils has Amazing mode";       
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";       
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  // const toggleMode2 = () => {
  //   if (Mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#59016f';
  //     // showAlert("Dark mode has been enabled", "success");
  //     document.title = "TextUtils - Dark Mode";
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     // showAlert("Light mode has been enabled", "success");
  //     document.title = "TextUtils - Light  Mode";
  //   }
  // }
  // const toggleMode3 = () => {
  //   if (Mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#8d0000';
  //     // showAlert("Dark mode has been enabled", "success");
  //     document.title = "TextUtils - Dark Mode";
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     // showAlert("Light mode has been enabled", "success");
  //     document.title = "TextUtils -Light Mode";
  //   }
  // }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={Mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="TextUtils - Word counter, Character counter, Remove Extra Spacces" mode={Mode} />
              {/* <TextForm showAlert={showAlert} heading="TextUtils - Word counter, Character counter, Remove Extra Spacces" mode = {Mode}/> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}


export default App;
