import styled from 'styled-components';
import Burger from './burger';

const Nav = styled.nav`
  align-items: center;
  background-color: #000;
  height: 72px;

.logo {
  color: red;
  margin-left: 30px;
}
`
const NavBar = () => (
  <header>
    <Nav className="navs">
       <div>
       <img src="./images/missafriclogo.jpeg" width="80" height="72" alt="logo" />
        </div>
        <Burger />
    </Nav>
  </header>
);

export default NavBar;
