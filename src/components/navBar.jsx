import "./navBar.css";
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import DataContext from "../store/dataContext";

function NavBar(){
  const cart = useContext(DataContext).cart;

  function getNumProducts() {
    let sum = 0;

    //travel the cart with a for loop
    // get every product, from the product get the quantity
    // add the quantity to sum

    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      sum += prod.quantity;
    }


    return sum;
  }


    return(


<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      Organika
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"to="/catalog">
            Catalog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">
            About Us
          </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Admin">
            Admin
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link className="btn btn-outline-success" to="/cart">
          {getNumProducts()}
          Cart
        </Link>
      </form>
    </div>
  </div>
</nav>


    );

}

export default NavBar;