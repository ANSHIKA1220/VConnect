import SideNavigation from '../components/layout/SideNavigation';

function MainLayout({ children }) {
  return (
    <div>

      {/* Fixed Sidebar */}
      <SideNavigation />

      {/* Page Area */}
      <div className="ml-20 min-h-screen">
        
        <div className="p-6">
          {children}
        </div>
      </div>

    </div>
  );
}

export default MainLayout;
