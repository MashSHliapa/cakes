import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { MainMenu } from '../MainMenu'
import './Layout.scss'
import { Footer } from '../Footer/Footer'
import { Main } from '../Main'


export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <MainMenu />
      <Outlet />
      <Footer />
    </div>
  )
}
