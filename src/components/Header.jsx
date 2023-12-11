import { Link } from "react-router-dom";
import { useLanguageContext } from "../contexts/LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguageContext();
  return (
    <header>
      <button onClick={toggleLanguage}>current Language is {language}</button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/create"}>Create Page</Link>
    </header>
  );
};

export default Header;
