import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="w-screen h-screen grid grid-rows-[100px_1fr]">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
