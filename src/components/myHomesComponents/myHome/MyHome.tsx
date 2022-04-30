/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import { Box, Typography } from '@mui/material'

import statements from '../../../utils/statements.json'
import { sortingCosts } from '../../../utils/functions'
import './MyHome.scss'

const style = {
  bgcolor: '#f6f6f4',
}

// @ts-ignore
export default function MyHomeModal({ houses }): JSX.Element {
  // eslint-disable-next-line prefer-destructuring

  const sorted = sortingCosts(houses.monthCosts)

  return (
    <Box sx={style}>
      <Typography className='header-modal' component='h1' id='modal-modal-title' variant='h6'>
        {statements.modal.h1}
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2, fontSize: '12px' }}>
        {statements.modal.text}
      </Typography>
      {/* @ts-ignore */}
      {sorted?.map((el) => {
        return (
          <Typography className='modal-item' id='modal-modal-description' key={el.name} sx={{ mt: 2 }}>
            <span>{el.name}</span>
            <span>{`${houses?.currency?.symbol} ${el.value?.toLocaleString()}`}</span>
          </Typography>
        )
      })}
      <Typography className='modal-item-colored' id='modal-modal-description' sx={{ mt: 2 }}>
        <span>{statements.modal.monthly}</span>
        <span>{`${houses?.currency?.symbol} ${houses?.monthlyContribution.toLocaleString()}`}</span>
      </Typography>
      <Typography className='modal-item' id='modal-modal-description' sx={{ mt: 2 }}>
        <span>{statements.modal.yearly}</span>
        <span>{`${houses?.currency?.symbol} ${houses?.annualTotal.toLocaleString()}`}</span>
      </Typography>
    </Box>
  )
}
