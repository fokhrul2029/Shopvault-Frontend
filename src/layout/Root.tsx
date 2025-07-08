import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Root: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
