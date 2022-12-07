import styled from 'styled-components';
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  // gap: 20px;
  flex-flow: row nowrap;

  li {
    color: red;
    padding: 18px 18px;
  }

@media (max-width: 786px) {
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
  background-color: #d99625;
  top: 0;
  // right: 0;
  min-height: 100vh;
  width: 100vw;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;

  li {
    color: #fff;
  }
}
`
const LeftNav = ({open}) => {
  return (
    <>
      <Ul  className="navlist" open={open}>
        <li className="links">Home</li>
        <li className="links">Events</li>
        <li className="links">Ogernizer</li>
        <li className="links">Galary</li>
        <li className="links">Login</li>
        </Ul>
    </>
  )
};

export default LeftNav;