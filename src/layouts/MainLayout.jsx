import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="p-4">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
