import './App.css'
import Login from './Components/Login'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SignUp from './Components/SignUp';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
