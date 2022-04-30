/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useState } from 'react'

import './DropdownHeader.scss'
import statements from '../../../utils/statements.json'
import MyHome from '../myHome/MyHome'

// @ts-ignore
const DropdownHeader = ({ houses }): JSX.Element => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div className='wrapper'>
      <hr className='statLine' />
      <button
        className='header'
        onClick={(e) => {
          toggle()
        }}
        type='button'
      >
        {statements.statem}
        <span className={open ? 'iconClosed' : 'icon'} />
      </button>
      <hr className='statLine' />
      {open && (
        <div className='menu'>
          <MyHome houses={houses} />
        </div>
      )}
    </div>
  )
}

export default DropdownHeader
