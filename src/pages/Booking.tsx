/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import { Typography } from '@mui/material'
import BookPageWrap from '../components/bookPageComponents/bookPageWrap/BookPageWrap'
import CalendarWrap from '../components/bookPageComponents/calendar/Calendar'
import houses from '../utils/houses.json'
import booking from '../utils/booking.json'
import '../pageStyles/bookingPage.scss'

export default function Booking(): JSX.Element {
  return (
    <>
      <div className='emptyHeight' />
      <Typography className='title' component='div' gutterBottom variant='h1'>
        {booking.h1}
      </Typography>
      {/* @ts-ignore */}
      {houses.map((el, index) => (
        <BookPageWrap
          bookPage
          children={<CalendarWrap bookedTime='' houses={el} modifyPage={false} />}
          houses={el}
          key={index}
          title={el.name}
        />
      ))}
    </>
  )
}
