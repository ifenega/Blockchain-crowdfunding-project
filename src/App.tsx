import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/auth/Signin/Signin';
import SignupConfirmation from './pages/auth/Signup/SignupConfirmation';
import Signup from './pages/auth/Signup/SIgnup';
import ResetPassword from './pages/auth/PasswordRecovery/ResetPassword';
import NewPassword from './pages/auth/PasswordRecovery/NewPassword';
import Home from './pages/Dashboard/donations/home/Home';
import Donations from './pages/Dashboard/donations/Donations';

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

        <Route
          path="/donations"
          element={
            <Donations />
          }
        >
          {/* Donations */}
          <Route
            path="/donations"
            element={<Navigate to="/donations/home" replace />}
          />
          <Route path="/donations/home" element={<Home />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
