import { Image } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import "../../styles/layout/Header.scss"

const Header = () => {

  return (
    <header className="header sticky-top shadow mb-5 ">
      <div className="container">
        <div className="row  justify-content-between align-items-center">
          <div className="col-12 col-sm-auto">
              <a href="/">
                  <Image
                    className="header__logo"
                    src="/assets/images/gadget-logo.png"
                    alt="Gadget garden logo"
                  />
              </a>
            </div>
          <div className="col-12 col-sm-auto header__cart px-5">
            <FaShoppingBag />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
