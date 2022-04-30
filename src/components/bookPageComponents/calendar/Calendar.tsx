/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react'
import { DateRange } from 'react-date-range'
import { Typography, Modal, Box } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { addDays } from 'date-fns'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addBookings, updateBookings } from '../../../store/selectedDays'
import ShedulingModal from '../../modals/shedModal/ShedulingModal'
import './Calendar.scss'
import booking from '../../../utils/booking.json'

const style = {
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

// @ts-ignore
const CalendarWrap = ({ bookedTime, houses, modifyPage }): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [stays, setStays] = React.useState('')
  const [state, setState] = React.useState([
    {
      startDate: modifyPage ? new Date(bookedTime.start) : new Date(),
      endDate: modifyPage ? new Date(bookedTime.end) : new Date(),
      key: 'selection',
    },
  ])
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    const stayArr = localStorage.getItem('bks')
    if (stayArr) {
      setStays(JSON.parse(stayArr))
    }
  }, [])

  // @ts-ignore
  const days = (state[0].endDate - state[0].startDate) / (24 * 60 * 60 * 1000)
  const nights = days - 1

  const chosenPeriod = () => {
    if (days === 0) {
      return booking.calendar.choose
    }
    if (days === 1) {
      return booking.calendar.oneDay
    }
    return `${days} ${booking.calendar.days}, ${nights} ${booking.calendar.nites}`
  }

  const options = { month: 'long', day: 'numeric' }
  // @ts-ignore
  const startDay = state[0]?.startDate?.toLocaleDateString('en-GB', options)
  // @ts-ignore
  const endDay = state[0]?.endDate?.toLocaleDateString('en-GB', options)

  const saveBooking = () => {
    const bookObject = {
      start: state[0]?.startDate.getTime(),
      end: state[0]?.endDate.getTime(),
      house: houses,
      daysQty: `${days} ${booking.calendar.days}, ${nights} ${booking.calendar.nites}`,
      bookedOn: Date.now(),
      status: 'active',
    }
    dispatch(addBookings(bookObject))
    navigate(`/demo/stays/${houses._id}&${bookObject.start}`)
  }

  const changeBooking = () => {
    const bookObject = {
      start: state[0]?.startDate.getTime(),
      end: state[0]?.endDate.getTime(),
      house: houses,
      daysQty: `${days} ${booking.calendar.days}, ${nights} ${booking.calendar.nites}`,
      bookedOn: bookedTime.bookedOn,
      changedOn: Date.now(),
      status: 'active',
    }
    const filteredStays = stays
      // @ts-ignore
      ?.filter((el) => el.start !== bookedTime.start)
    const total = filteredStays.concat(bookObject)
    dispatch(updateBookings(total))
    navigate(`/demo/stays/${houses._id}&${bookObject.start}`)
  }

  const blockedDays = [new Date(2022, 3, 20), new Date(2022, 3, 24)]

  const daysArr = () => {
    // @ts-ignore
    const daysQty = (blockedDays[1] - blockedDays[0]) / (1000 * 60 * 60 * 24)
    const arr = []
    for (let i = 0; i < daysQty; i++) {
      arr.push(addDays(new Date(blockedDays[0]), i))
    }
    return arr
  }

  const unitedDisabled = daysArr().concat(new Date())

  const resetCalendar = () => {
    setState([
      {
        startDate: modifyPage ? new Date(bookedTime.start) : new Date(),
        endDate: modifyPage ? new Date(bookedTime.end) : new Date(),
        key: 'selection',
      },
    ])
  }

  return (
    <div className='calendarWrap'>
      <DateRange
        disabledDates={unitedDisabled}
        editableDateInputs={true}
        maxDate={addDays(new Date(), 765)}
        minDate={addDays(new Date(), 2)}
        moveRangeOnFirstSelection={false}
        // @ts-ignore
        onChange={(item) => setState([item.selection])}
        // @ts-ignore
        rangeColors={['#BDBCDB']}
        ranges={state}
      />
      <hr className='rowLineCalendar' />
      {days > 2 && <div className='bookDate'>{booking?.calendar?.arebook}</div>}
      <Typography className='choose' component='div' gutterBottom variant='h2'>
        {chosenPeriod()}
      </Typography>
      {days < 3 && (
        <div className='calendarInfo'>
          <div>
            <ErrorOutlineIcon sx={{ color: '#7E7CCF' }} />
            <div className='blueText'>{booking.calendar.text}</div>
          </div>
        </div>
      )}
      {days > 2 && days < 14 && (
        <div className='arriveInfo'>
          <div>
            <div className='arriveGroup'>
              <div className='blueLine'>{booking.calendar.arrive}</div>
              <div className='blueLine'>{booking.calendar.depart}</div>
            </div>
            <hr className='arriveLine' />
            <div className='arriveGroup'>
              <div className='blackWords'>{startDay}</div>
              <div className='blackWords'>{endDay}</div>
            </div>
          </div>
        </div>
      )}
      <div className='bookingButtons'>
        <button className='roundButton' onClick={resetCalendar} type='button'>
          {booking.calendar.reset}
        </button>
        <button
          className='roundButtonBlack'
          disabled={days > 2 ? false : true}
          onClick={modifyPage ? changeBooking : saveBooking}
          type='button'
        >
          {booking.calendar.confirm}
        </button>
      </div>
      <Typography className='blueWords' component='div' gutterBottom onClick={handleOpen} role='button'>
        {booking.calendar.help}
      </Typography>
      <Modal
        aria-describedby='modal-modal-description'
        aria-labelledby='modal-modal-title'
        onClose={handleClose}
        open={open}
      >
        <Box className='modalFaq' sx={style}>
          <h1>{booking.faqTitle}</h1>
          <button className='crossButton' onClick={handleClose} type='button' />
          <ShedulingModal />
        </Box>
      </Modal>
    </div>
  )
}

export default CalendarWrap
