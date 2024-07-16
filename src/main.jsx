import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './Styles/index.css';

import Sidebar from './Template/Sidebar';

import Dashboard from './Page/Dashboard/Dashboard';

import Profile from './Page/About/Profile/Profile';
import EditProfile from './Page/About/Profile/EditProfile';

const DefaultLayout = ({ children }) => {
  return (
    <div className="sidebar-content flex justify-center px-[5%] h-screen">
      {/* sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="container-content flex-1 overflow-y-auto px-4 py-6">
        {children}
      </div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Dashboard />
          </DefaultLayout>
        }
      />

      <Route
        path="/aboutme/profile"
        element={
          <DefaultLayout>
            <Profile />
          </DefaultLayout>
        }
      />

      <Route
        path="/aboutme/edit-data-profile/:id"
        element={
          <DefaultLayout>
            <EditProfile />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

const Main = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);