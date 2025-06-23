import React from 'react'
// import IssueReportForm from '../components/IssueReportForm'
import HeroSection from '../components/HeroSection'
import PastWork from '../components/PastWork';
import DashboardSection from '../components/DashboardSection';
import IssueReportForm from '../components/IssueReportForm';
import HowItWorks from '../components/HowItWorks';
import IssueFormPage from './IssueFormPage';

// import CameraCapture from './components/CameraCapture';

const LandingPage = () => {
  return (
    <div className='min-h-screen flex flex-col gap-2 '>
        <HeroSection/>
        <PastWork/>
        <DashboardSection/>
        <IssueFormPage/>
        <HowItWorks/>
    </div>
  )
}

export default LandingPage