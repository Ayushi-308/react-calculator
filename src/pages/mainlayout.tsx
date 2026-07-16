import Header from "../layout/header";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <div>
      <Header />

      <main >
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;