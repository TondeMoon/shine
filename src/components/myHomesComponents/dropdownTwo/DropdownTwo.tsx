/* eslint-disable no-magic-numbers */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useState } from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

import './DropdownTwo.scss'
import { sortMonthYear, sortYear } from '../../../utils/functions'

// @ts-ignore
const DropdownTwo = ({ value, setValue, houses, year }): JSX.Element => {
  const [open, setOpen] = useState(false)
  const toggle = () => setTimeout(() => setOpen(!open), 300)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggle()
    // @ts-ignore
    setValue((event.target as HTMLInputElement).value)
  }

  const sorted = year ? sortYear(houses.costs) : sortMonthYear(houses.costs)

  return (
    <div className='wrapperTwo'>
      <button
        className='headerTwo'
        onClick={(e) => {
          toggle()
        }}
        type='button'
      >
        {value}
        <span className={'icon'} />
      </button>
      <hr className='statLine' />
      {open && (
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          className='menuTwo'
          name='controlled-radio-buttons-group'
          onChange={(e) => {
            handleChange(e)
          }}
          onClick={(e) => {
            toggle()
          }}
          value={value}
        >
          {/* @ts-ignore */}
          {sorted.map((el) => {
            return (
              <>
                <FormControlLabel
                  className='oneItemTwo'
                  control={<Radio />}
                  key={el._id}
                  label={year ? `${el.year}` : `${el.month} ${el.year}`}
                  value={year ? `${el.year}` : `${el.month} ${el.year}`}
                />
              </>
            )
          })}
        </RadioGroup>
      )}
    </div>
  )
}

export default DropdownTwo
