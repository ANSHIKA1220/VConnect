import SideNavigation from '../components/layout/SideNavigation';
import Navbar from '../components/layout/Navbar';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <SideNavigation />
      <div className="ml-16">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;