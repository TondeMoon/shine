/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-magic-numbers */
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import menu from '../../../utils/menu.json'

// @ts-ignore
const Navbar = ({ toggle, topHeader }): JSX.Element => {
  const location = useLocation()

  const book = '/demo/book'
  const stays = '/demo/stays'
  // const concierge = '/concierge'
  const myhome = '/demo/myhomes'

  const opacity = (link: string) => {
    if (!topHeader) {
      if (location.pathname.includes(link)) {
        return 1
      }
      return 0.5
    }
    return 1
  }

  const colorText = () => {
    if (topHeader) {
      return '#3d3d3d'
    }
    return '#D0D3DA'
  }

  const toggleFunc = () => {
    if (topHeader) {
      toggle()
    }
  }

  return (
    <>
      <Link onClick={toggleFunc} style={{ opacity: opacity(book), color: colorText() }} to={book}>
        {menu.book}
      </Link>
      <Link onClick={toggleFunc} style={{ opacity: opacity(stays), color: colorText() }} to={stays}>
        {menu.stays}
      </Link>
      {/* <Link style={{ opacity: opacity(concierge) }} to={concierge}>
        {menu.concierge}
  </Link> */}
      <Link onClick={toggleFunc} style={{ opacity: opacity(myhome), color: colorText() }} to={myhome}>
        {menu.myhome}
      </Link>
    </>
  )
}

export default Navbar
