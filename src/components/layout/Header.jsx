import { Image } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {

  return (
    <header className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-auto">
          <div className="col-10">
            <a href="/">
              <Image
                  width={200}
                  height={90}
                  src="/assets/images/gadget-logo.png"
                  alt="Gadget garden logo"
                />
            </a>
          </div>
          </div>
        <div className="col-auto">
          <FaShoppingBag />
        </div>
      </div>
    </header>
  );
};

export default Header;
