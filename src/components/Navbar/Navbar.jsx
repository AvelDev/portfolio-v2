import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <nav className="flex justify-around">
      <Button text="Home" link="/" />
      <Button text="Projects" link="/projects" />
      <Button text="Contact" link="/contact" />
    </nav>
  );
};

const Button = ({ text, link }) => {
  return (
    // <Link
    //   className="font-bold bg-400% text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-primary via-yellow-400 to-primary
    //     hover:from-secondary-400 hover:to-primary"
    //   to={link}
    // >
    //   {text}
    // </Link>
    <Link
      className="font-bold hover:text-primary transition duration-300 ease-in-out"
      to={link}
    >
      {text}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Navbar;
