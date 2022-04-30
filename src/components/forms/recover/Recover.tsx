import * as React from 'react'
import { TextField, Box, Typography } from '@mui/material'

import './Recover.scss'
import { dataSignIn } from '../../../utils/constants'

interface State {
  email: string
}

interface Show {
  showCode: boolean
}

// interface codeVal {
//   one: string
//   two: string
//   three: string
//   four: string
// }

const inputProp = {
  maxLength: 1,
  style: {
    height: '90px',
    width: '45px',
    fontSize: '54px',
    margin: '0 auto',
  },
}

export default function SignInSide(): JSX.Element {
  const [showCode, setShowCode] = React.useState<Show>({ showCode: false })
  const [values, setValues] = React.useState<State>({
    email: '',
  })
  // const [codeVal, setCodeVal] = React.useState<codeVal>({ one: '', two: '', three: '', four: '' })

  const toggle = () => setShowCode({ showCode: !showCode?.showCode })
  console.log(showCode)

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
      <Typography className='login-title' component='h1' variant='h5'>
        {dataSignIn.forgot}
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
        {showCode && showCode.showCode && (
          <Box>
            <Typography className='login-title' component='h2' sx={{ textAlign: 'center', paddingTop: '60px' }}>
              {dataSignIn.secure}
            </Typography>
            <Typography component='div' sx={{ paddingBottom: '20px', opacity: 0.5 }}>
              {dataSignIn.text}
            </Typography>
            <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
              <TextField className='number-input' inputProps={inputProp} />
              <TextField className='number-input' inputProps={inputProp} />
              <TextField className='number-input' inputProps={inputProp} />
              <TextField className='number-input' inputProps={inputProp} />
            </Box>
          </Box>
        )}
        <button
          className='common-button'
          onClick={() => {
            console.log('data sent')
            toggle()
          }}
          type='submit'
        >
          {dataSignIn.button}
        </button>
      </Box>
    </Box>
  )
}
