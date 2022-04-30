/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import stays from '../../../utils/stays.json'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

// @ts-ignore
export default function BasicModal({ house, open, handleClose }): JSX.Element {
  return (
    <Modal onClose={handleClose} open={open}>
      <Box sx={style}>
        <Typography component='h2' id='modal-modal-title' sx={{ textAlign: 'center' }} variant='h6'>
          {house?.manager?.name || 'OWNERO Team'}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2, textAlign: 'center' }}>
          {house?.manager?.phone}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2, textAlign: 'center' }}>
          {house?.manager?.phone}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2, textAlign: 'center' }}>
          {house?.manager?.email}
        </Typography>
        <button
          className='roundWhButton'
          onClick={handleClose}
          style={{ marginTop: '20px', marginBottom: 0, width: '140px', marginLeft: 'auto', marginRight: 'auto' }}
          type='button'
        >
          {stays.cancelContact.ok}
        </button>
      </Box>
    </Modal>
  )
}
