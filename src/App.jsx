import React from "react"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch,Route } from  "react-router-dom";

function App() {
  const [mode,setMode] = React.useState('light'); // whether dark mode is enabled or not.
  const[alert,setAlert] = React.useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })

  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")

    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
<Switch>
  <Route  exact path="/about">
    <About/>
  </Route>
  <Route exact path="/">
  <TextForm  showAlert={showAlert}heading="Enter the text to analyze below" mode={mode} />
  </Route>
</Switch>

       </div>
       </Router>
    </>
  )
}
export default App
