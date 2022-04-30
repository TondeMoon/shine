/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react'
import { Typography, Grid, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import ManagerModal from '../../modals/managerModal/ManagerModal'
import stays from '../../../utils/stays.json'

import './BookConf.scss'
import booking from '../../../utils/booking.json'

// @ts-ignore
const ConfirmWrap = ({ bookedTime }): JSX.Element => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const navigate = useNavigate()
  const options = { month: 'numeric', day: 'numeric' }

  const mapsLink = `https://maps.google.com/?q=${bookedTime.house.latitude},${bookedTime.house.longitude}`

  console.log(bookedTime)

  const noLink = () => {
    if (!bookedTime?.house?.latitude || !bookedTime?.house?.longitude) {
      return true
    }
    return false
  }

  const copyAndNotice = () => {
    navigator.clipboard.writeText(stays.conf)
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1200)
  }

  const handleTooltipClose = () => {
    setShow(false)
  }

  return (
    <div className='confWrap'>
      <Typography className='stayTitle' component='div' gutterBottom variant='h2'>
        {bookedTime?.changedOn ? stays.changed : stays.h1}
      </Typography>
      <div className='arriveInfo'>
        <div>
          <div className='arriveGroup'>
            <div className='blueLine'>{booking.calendar.arrive}</div>
            <div className='blueLine'>{booking.calendar.depart}</div>
          </div>
          <hr className='RowLine' style={{ width: '88%', marginLeft: 'auto', marginRight: 'auto' }} />
          <div className='arriveGroup'>
            {/* @ts-ignore */}
            <div className='blackWords'>{new Date(bookedTime?.start).toLocaleDateString('en-GB', options)}</div>
            {/* @ts-ignore */}
            <div className='blackWords'>{new Date(bookedTime?.end).toLocaleDateString('en-GB', options)}</div>
          </div>
        </div>
      </div>
      <div className='bookDateAfter'>{booking?.calendar?.confbook}</div>
      <Typography className='chooseAfter' component='div' sx={{ mb: 0, pb: 0 }} variant='h2'>
        {bookedTime.daysQty}
      </Typography>
      <div className='lowerWrap'>
        <div className='ParameterHeading'>{booking.house.address}</div>
        <Grid container>
          <Grid item xs={6}>
            <div className='ParameterSmallText'>{bookedTime?.house?.address}</div>
          </Grid>
          <Grid item xs={6}>
            {!noLink() && (
              <a href={mapsLink} rel='noopener noreferrer' style={{ textDecoration: 'none' }} target='_blank'>
                <div className='ParameterBlueText'>{stays.maps}</div>
              </a>
            )}
          </Grid>
        </Grid>
        <hr className='RowLine' />
        <div className='ParameterHeading'>{stays.manager}</div>
        <Grid container>
          <Grid item xs={8}>
            <div className='ParameterSmallText'>{bookedTime?.house?.manager?.name}</div>
          </Grid>
          <Grid item xs={4}>
            <div className='ParameterBlueText' onClick={handleOpen} role='button'>
              {stays.contact}
            </div>
          </Grid>
        </Grid>
        <hr className='RowLine' />
        <div className='ParameterHeading'>{stays.code}</div>
        <Grid container>
          <Grid item xs={8}>
            <div className='ParameterSmallText'>{stays.conf}</div>
          </Grid>
          <Grid item xs={4}>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              onClose={handleTooltipClose}
              open={show}
              placement='bottom-end'
              title={stays.copyC}
            >
              <div className='ParameterBlueText' onClick={copyAndNotice}>
                {stays.copy}
              </div>
            </Tooltip>
          </Grid>
        </Grid>
        <hr className='RowLine' />
        <button
          className='roundBlackButton'
          onClick={() => navigate(`/demo/stays/modify/${bookedTime.house._id}&${bookedTime.start}`)}
          type='button'
        >
          {stays.godetails}
        </button>
      </div>
      <ManagerModal handleClose={handleClose} house={bookedTime.house} open={open} />
    </div>
  )
}

export default ConfirmWrap
