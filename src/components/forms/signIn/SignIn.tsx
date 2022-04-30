import * as React from 'react'
import { TextField, Box, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import './SignIn.scss'
import { dataSignIn } from '../../../utils/constants'

interface State {
  email: string
  password: string
  showPassword: boolean
}

export default function SignInSide(): JSX.Element {
  const [values, setValues] = React.useState<State>({
    password: '',
    email: '',
    showPassword: false,
  })

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography className='login-title' component='h1' variant='h5'>
        {dataSignIn.title}
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
        <TextField
          autoComplete='email'
          autoFocus
          id='email'
          margin='normal'
          name='email'
          onChange={handleChange('email')}
          placeholder='Email'
          required
          sx={{ width: 337, borderRadius: 0 }}
          value={values.email}
        />
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton aria-label='toggle password visibility' edge='end' onClick={handleClickShowPassword}>
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          id='outlined-adornment-password'
          onChange={handleChange('password')}
          placeholder='Password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
        />
        <button
          className='common-button'
          onClick={() => {
            console.log('data sent')
          }}
          type='submit'
        >
          {dataSignIn.button}
        </button>
        <div className='link-group'>
          <span>{dataSignIn.forgot}</span>
          <Link to={'/recover'}>{dataSignIn.recover}</Link>
        </div>
        <div className='link-group'>
          <span>{dataSignIn.noAcc}</span>
          <Link to={'/demo/book'}>{dataSignIn.demo}</Link>
        </div>
      </Box>
    </Box>
  )
}
