import './App.css'
import Login from './Components/Login'
import MainDashboard from './Components/MainDashboard'
import AdminDashboard from './Components/admin/AdminDashboard';
import VolunteerDashboard from './Components/volunteer/VolunteerDashboard';
import FamilyDashboard from './Components/family/FamilyDashboard';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SignUp from './Components/SignUp';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainDashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/adminDashboard' element={<AdminDashboard/>}/>
          <Route path='/volunteerDashboard' element={<VolunteerDashboard/>}/>
          <Route path='/familyDashboard' element={<FamilyDashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
