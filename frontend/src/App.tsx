import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import RoleSelection from './pages/RoleSelection';
import RegisterPatient from './pages/RegisterPatient';
import Login from './pages/Login';
import PatientDashboard from './pages/PatientDashboard';
import SelectPersona from './pages/SelectPersona';
import AIChat from './pages/AIChat';
import KaderDashboard from './pages/KaderDashboard';
import BalitaRecording from './pages/BalitaRecording';
import ReferralVerification from './pages/ReferralVerification';
import HealthHistory from './pages/HealthHistory';
import PatientProfile from './pages/PatientProfile';
import LansiaRecording from './pages/LansiaRecording';
import DoctorDashboard from './pages/DoctorDashboard';
import ReferralLetterPrint from './pages/ReferralLetterPrint';
import KMSDigital from './pages/KMSDigital';
import KadesDashboard from './pages/KadesDashboard';
import VillageReportPrint from './pages/VillageReportPrint';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/register" element={<RegisterPatient />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PatientDashboard />} />
      <Route path="/select-persona" element={<SelectPersona />} />
      <Route path="/chat" element={<AIChat />} />
      <Route path="/health-history" element={<HealthHistory />} />
      <Route path="/patient-profile" element={<PatientProfile />} />
      <Route path="/kader-dashboard" element={<KaderDashboard />} />
      <Route path="/balita-recording" element={<BalitaRecording />} />
      <Route path="/referral-verification" element={<ReferralVerification />} />
      <Route path="/lansia-recording" element={<LansiaRecording />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/referral-print" element={<ReferralLetterPrint />} />
      <Route path="/kms-digital" element={<KMSDigital />} />
      <Route path="/kades-dashboard" element={<KadesDashboard />} />
      <Route path="/village-report-print" element={<VillageReportPrint />} />
    </Routes>
  );
}

export default App;
