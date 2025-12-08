import Hero from "./Hero";
import Footer from "./Footer";
import NavBar from "./NavBar";

const pages = [
  { name: "Home", key: "/" },
  { name: "About", key: "/about" },
  { name: "Contact", key: "/contact" },
];

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navigation */}
      <NavBar />

      <Hero />

      <div>
        {/* Content Area */}
        <section>{children}</section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
