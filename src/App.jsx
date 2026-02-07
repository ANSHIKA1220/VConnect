import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Profile from './pages/Profile';
import './styles/layout.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;