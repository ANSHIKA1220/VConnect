import SideNavigation from '../components/layout/SideNavigation';
import Navbar from '../components/layout/Navbar';

function MainLayout({ children, noPadding = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Fixed Sidebar */}
      <SideNavigation />

      {/* Main area pushed right of sidebar */}
      <div style={{ marginLeft: "224px", display: 'flex', flexDirection: 'column', flex: 1, height: '100vh', overflow: 'hidden' }}>
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="main-content-area" style={{ padding: noPadding ? "0" : "24px", flex: 1, overflowY: noPadding ? "hidden" : "auto", display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;