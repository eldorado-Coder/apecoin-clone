import '../App.css';
import { Route } from "react-router-dom";
import '../App.css'  
const logo = 'wordmark.svg'

function Header() {
  return (
    <div className="header">
        <img src={logo} width={76} height={40} alt='logo'></img>
    </div>
  );
}

export default Header;
