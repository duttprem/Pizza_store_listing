import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavbarWrapper = styled.nav`
  background: brown;
  ul {
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    li {
      a {
        text-decoration: none;
        font-weight: 600;
        font-size: 1.5rem;
        color: white;
        .cart-link {
          display: flex;
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <Link to="/">Pizza Listing Store</Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="cart-link">
              <div className="cart-icon">
                <AiOutlineShoppingCart />
              </div>
              <div>Cart</div>
            </div>
          </Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
