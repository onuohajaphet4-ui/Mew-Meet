import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNavs";

function MainLayout() {
  return (
    <div className="app">
      <main className="page-content">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}

export default MainLayout;