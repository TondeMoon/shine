/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import { Grid, Box, Chip } from '@mui/material'
import ImagesSwiper from '../imagesSwiper/ImagesSwiper'

import './BookPageWrap.scss'
import LinedDataInline from '../linedDataInline/LinedDataInline'
import LinedData from '../linedData/LinedData'
import booking from '../../../utils/booking.json'
import exclam from '../../../images/exclam.svg'
import user from '../../../utils/fakeUser.json'

// @ts-ignore
export default function Booking({ children, title, bookPage, houses }): JSX.Element {
  return (
    <Box className='booking-page'>
      <Grid container spacing={5}>
        <Grid item lg={4} md={5} xl={4} xs={12}>
          {children}
        </Grid>
        <Grid item lg={8} md={7} xl={8} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <div className='name-block'>
                <div className='name-container'>{houses?.name}</div>
                <div className='chipBlock'>
                  <Chip
                    label={
                      <div className='SumOwn'>
                        {booking.house.share_ownership_8}
                        <button className='IconButton' type='button'>
                          <img alt='exclam sign' className='Exclam' src={exclam} />
                        </button>
                      </div>
                    }
                    sx={{ mr: 2, width: 'fit-content' }}
                  />

                  <Chip
                    label={
                      <div className='have'>
                        <span className='staysText'>{`${user.nites} nights`} </span> /
                        <span className='staysText'>{` ${user.stays} general stays `}</span> left
                      </div>
                    }
                    sx={{ mr: 2, width: 'fit-content' }}
                  />
                </div>
              </div>
              <div className='ParameterAddr'>{houses?.address}</div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <LinedDataInline house={houses} />
            </Grid>
          </Grid>
          <ImagesSwiper data={houses?.photos} status={houses?.status} />
        </Grid>
      </Grid>
      <LinedData house={houses} />
    </Box>
  )
}
