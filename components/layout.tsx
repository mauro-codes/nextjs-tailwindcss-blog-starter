import Navbar from "./navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 dark:bg-cool-gray-900 min-h-screen">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default Layout;
