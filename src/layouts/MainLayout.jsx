import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f7fb" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}
