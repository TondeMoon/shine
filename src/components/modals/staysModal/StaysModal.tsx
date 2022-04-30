/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import { Box, Typography, Modal } from '@mui/material'

import stays from '../../../utils/stays.json'
import './StaysModal.scss'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 275,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
}

// @ts-ignore
export default function BasicModal({ open, handleClose }): JSX.Element {
  return (
    <Modal
      aria-describedby='modal-modal-description'
      aria-labelledby='modal-modal-title'
      onClose={handleClose}
      open={open}
    >
      <Box sx={style}>
        <Typography component='h2' id='modal-modal-title' sx={{ textAlign: 'center', fontSize: '14px' }} variant='h6'>
          {stays.cycles.cycle}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2, fontSize: '12px' }}>
          {stays.cycles.text}
        </Typography>
        <button className='modal-button' onClick={handleClose} type='button'>
          {stays.cycles.button}
        </button>
      </Box>
    </Modal>
  )
}
