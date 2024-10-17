import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AddDeliveryRequest from './pages/AddDeliveryRequest';
import ViewRequests from './pages/ViewRequests';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-request" element={<AddDeliveryRequest />} />
          <Route path="/view-requests" element={<ViewRequests />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;