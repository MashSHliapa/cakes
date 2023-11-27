import { Header } from '../Header'
import { Main } from '../Main'
import { MainMenu } from '../MainMenu'
import './Layout.scss'

export function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Main/>
      <MainMenu/>
    </div>
  )
}
