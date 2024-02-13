import { MenuBurger } from '../MenuBurger'
import { Navbar } from '../Navbar'
import './Header.scss'

export function Header() {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__navbar">
          <Navbar />
        </div>
        <div className="header__burger">
          <MenuBurger />
        </div>
      </div>
    </header>
  )
}
