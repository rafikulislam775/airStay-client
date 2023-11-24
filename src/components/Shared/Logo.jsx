import { Link } from "react-router-dom";
import logoImg from "../../../../public/air_stay-logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="hidden md:block"
        src={logoImg}
        alt="logo"
        width="50"
        height="80"
      />
    </Link>
  );
};

export default Logo;
