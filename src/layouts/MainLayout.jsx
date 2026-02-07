import SideNavigation from '../components/layout/SideNavigation';
import Navbar from '../components/layout/Navbar';

function MainLayout({ children }) {
  return (
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

    </div>
  );
}

export default MainLayout;
