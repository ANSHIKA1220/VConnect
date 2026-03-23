import SideNavigation from '../components/layout/SideNavigation';
import Navbar from '../components/layout/Navbar';

function MainLayout({ children }) {
  return (
    <div>
      {/* Fixed Sidebar */}
      <SideNavigation />

      {/* Main area pushed right of sidebar */}
      <div style={{ marginLeft: "224px" }}>
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div style={{ padding: "24px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;