import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { MainMenu } from '../MainMenu'
import { Footer } from '../Footer/Footer'
import { Main } from '../Main/Main'
import './Layout.scss'
import { Fillings } from '../Fillings/Fillings'

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />

      <MainMenu />
      <Fillings />
      <Outlet />
      <Footer />
    </div>
  )
}
