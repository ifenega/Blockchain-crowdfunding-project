import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/auth/Signin/Signin';
import SignupConfirmation from './pages/auth/Signup/SignupConfirmation';
import Signup from './pages/auth/Signup/SIgnup';
import ResetPassword from './pages/auth/PasswordRecovery/ResetPassword';
import NewPassword from './pages/auth/PasswordRecovery/NewPassword';

function App() {
  return (
    <>
      <Routes>
        {/* Auth */}

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signin" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/confirmation" element={<SignupConfirmation />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/new" element={<NewPassword />} />

      </Routes>
    </>
  );
}

export default App;
