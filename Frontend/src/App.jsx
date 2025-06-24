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
import GovSigninPage from './pages/GovSignInPage';
import GovSignupPage from './pages/GovSignUpPage';
import CitizenOfficial from './pages/MainPage';
import AboutUs from './pages/Aboutus';
import Departments from './pages/DepartmentList';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <BrowserRouter>
      <Navbar />
      
             <Routes >
            <Route path="/" element={isLoggedIn ? <LandingPage/> : <CitizenOfficial/>} />
            <Route path="/sign-in" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/issue-listing" element={<IssueListingPage/>} />
            <Route path="/statistic-dashboard" element={<Dashboard/>} />
            <Route path="/gov-sign-in" element={<GovSigninPage/>} />
            <Route path="/gov-sign-up" element={<GovSignupPage/>} />
            <Route path="/main-page" element={<CitizenOfficial />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/departments" element={<Departments />} />
          </Routes>
        
      <Footer />
    </BrowserRouter>
  );
}

export default App;
