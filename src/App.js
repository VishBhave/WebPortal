import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import CompanyDashboard from './pages/CompanyDashboard'
import Home from './pages/Home';
import LogoutStudent from './pages/LogoutStudent';
import LogoutCompany from './pages/LogoutCompany';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/student" element={<StudentDashboard  />} />
      <Route path="/dashboard/company" element={<CompanyDashboard  />} />
      <Route path='/studentlogout' element={<LogoutStudent/>}/>
      <Route path='/companylogout' element={<LogoutCompany/>}/>

    </Routes>
  );
}