import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <footer>
        <p className="text-center text-xs text-gray-600">
          Check webiste code on GitHub!
        </p>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
