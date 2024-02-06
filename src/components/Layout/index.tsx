import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import { MainMenu } from '../MainMenu'
import './Layout.scss'
import { Footer } from '../Footer'


export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <MainMenu />
      <Footer />
    </div>
  )
}
