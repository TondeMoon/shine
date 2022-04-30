import * as React from 'react'
import { TextField, Box, Typography } from '@mui/material'

import { dataSignIn } from '../../../utils/constants'
import './NewPassword.scss'

interface State {
  password: string
  newPassword: string
}

interface Show {
  showSuccess: boolean
}

export default function NewPass(): JSX.Element {
  const [values, setValues] = React.useState<State>({
    password: '',
    newPassword: '',
  })
  const [showSuccess, setShowSuccess] = React.useState<Show>({ showSuccess: false })

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography className='login-short-title' component='h1' variant='h5'>
        {showSuccess && showSuccess.showSuccess ? dataSignIn.success : dataSignIn.enter}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
          },
          '& .MuiFormControl-root': {
            mt: 0,
            mb: 2,
          },
          '& .MuiOutlinedInput-input': {
            padding: '11px 16px',
            color: '#3C3C43 !important',
            backgroundColor: '#ffffff',
          },
        }}
      >
        {!showSuccess.showSuccess && (
          <>
            <TextField
              autoComplete='password'
              autoFocus
              id='password'
              margin='normal'
              name='password'
              onChange={handleChange('password')}
              placeholder='Password'
              required
              sx={{ width: 337, borderRadius: 0 }}
              value={values.password}
            />
            <TextField
              autoComplete='newPassword'
              autoFocus
              id='newPassword'
              margin='normal'
              name='newPassword'
              onChange={handleChange('newPassword')}
              placeholder='Confirm password'
              required
              sx={{ width: 337, borderRadius: 0 }}
              value={values.newPassword}
            />
          </>
        )}
        <button
          className='common-button'
          onClick={() => {
            console.log('data sent')
            setShowSuccess({ showSuccess: !showSuccess.showSuccess })
          }}
          type='submit'
        >
          {dataSignIn.button}
        </button>
      </Box>
    </Box>
  )
}
