import './App.css';
import 'leaflet/dist/leaflet.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import SigninPage from './pages/SignInPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import IssueListingPage from './pages/IssueListingPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
             <Routes >
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/issue-listing" element={<IssueListingPage/>} />
            <Route path="/statistic-dashboard" element={<Dashboard/>} />
          </Routes>
        
      <Footer />
    </BrowserRouter>
  );
}

export default App;
