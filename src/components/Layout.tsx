import { Outlet } from "react-router-dom";
import Background from "./Background";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-full relative overflow-x-hidden">
      <Background />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
