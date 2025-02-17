import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header2 = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Nav>
        <NavLink to="/">GRUPO GUERRERO DEL NORTE</NavLink>
        <Bars onClick={toggleMenu} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/trips">
            Contactanos
          </Button>
        </NavBtn>
      </Nav>

      {/* MENÚ MÓVIL */}
      <MobileMenu isOpen={isOpen}>
        <CloseIcon onClick={toggleMenu} />
        {menuData.map((item, index) => (
          <MobileLink to={item.link} key={index} onClick={toggleMenu}>
            {item.title}
          </MobileLink>
        ))}
        <MobileButtonWrapper>
          <Button primary="true" round="true" to="/trips" onClick={toggleMenu}>
            Contactanos
          </Button>
        </MobileButtonWrapper>
      </MobileMenu>
    </>
  )
}
export default Header2

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

// MENÚ MÓVIL ESTILOS
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: #000;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const MobileLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;

  &:hover {
    background: #1f1f1f;
    width: 100%;
  }
`

const MobileButtonWrapper = styled.div`
  margin-top: 2rem;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`
