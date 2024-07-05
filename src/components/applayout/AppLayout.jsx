import { Outlet } from "react-router-dom";
import AppLayoutNav from "./AppLayoutNav";
import AppLayoutSide from "./AppLayoutSide";

function AppLayout() {
  return (
    <div className="md:grid h-[100vh] md:grid-cols-[13rem,1fr] md:grid-rows-[auto,1fr]">
      <AppLayoutNav />
      <AppLayoutSide />
      <main className="bg-stone-100">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
