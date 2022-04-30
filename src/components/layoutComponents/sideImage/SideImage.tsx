/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import { Paper, Grid } from '@mui/material'

import house from '../../../images/house_login.jpg'

// @ts-ignore
const SideImage = ({ children }): JSX.Element => {
  return (
    <Grid component='main' container sx={{ height: '100vh' }}>
      <Grid
        component={Paper}
        elevation={6}
        item
        md={6}
        sm={8}
        square
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '270px' }}
        xs={12}
      >
        {children}
      </Grid>
      <Grid
        item
        md={6}
        sm={4}
        sx={{
          backgroundImage: `url(${house})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        xs={false}
      />
    </Grid>
  )
}

export default SideImage
