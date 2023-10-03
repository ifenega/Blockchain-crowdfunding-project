import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/auth/Signin/Signin';

function App() {
  return (
    <>
      <Routes>
        {/* Auth */}

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signin" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Signin />} />

      </Routes>
    </>
  );
}

export default App;
