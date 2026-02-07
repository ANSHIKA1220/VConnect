import React from 'react';
import Navigation from '../components/layout/Navigation';

const MainLayout = ({ children, onResetView, isDarkMode, onToggleDarkMode, hasActiveChat }) => {
  return (
<<<<<<< HEAD
    <div>

      {/* Fixed Sidebar */}
      <SideNavigation />

      {/* Page Area */}
      <div style={{ paddingLeft: "224px", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ padding: "24px" }}>
          {children}
        </div>
      </div>

=======
    <div className={`app-container ${hasActiveChat ? 'has-active-chat' : ''}`}>
      <Navigation
        onResetView={onResetView}
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      {children}
>>>>>>> 77602e3d511ba64306b12f0587d2f044ad746b78
    </div>
  );
};

export default MainLayout;
