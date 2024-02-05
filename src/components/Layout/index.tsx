import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import { MainMenu } from '../MainMenu'
import './Layout.scss'


export function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Outlet/>
      <MainMenu/>
    </div>
  )
}
