import Navbar from "../components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default Layout;
