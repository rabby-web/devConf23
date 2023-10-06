import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
