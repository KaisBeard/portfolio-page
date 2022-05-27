import Collapsible from 'react-collapsible';
import Burgerbutton from "./pictures/burgerButton.png"

function Header() {
  return (
    <header>
      <h1>Portfolio Kai Frenkel_</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a> 
        <a href="#projects">Projects</a> 
        <div className="burgerButton">
          <Collapsible trigger={<img src={Burgerbutton} className="burgerImg" />} >
            <div className="burgerMenu">
              <a href="#about">About</a>
              <a href="#skills">Skills</a> 
              <a href="#projects">Projects</a>
            </div>
          </Collapsible>
        </div> 
      </nav>
    </header>
  );
}

export default Header;
