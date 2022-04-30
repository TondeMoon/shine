/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Grid } from '@mui/material'

import booking from '../../../utils/booking.json'
import './OneEight.scss'

// @ts-ignore
const OneEight = ({ house }): JSX.Element => (
  <div>
    <div className='OneEight'>
      <h2 className='Heading'>{booking.house.how_we_price_8}</h2>
      <div className='Text'>{booking.house.how_we_price_text}</div>
      <hr className='RowLine' />
      <Grid container>
        <Grid item lg={9} md={7} sm={7} xl={9} xs={8}>
          <div className='TableHeading'>{booking.house.share_price}</div>
          <div className='Price'>
            {booking.house.whole_home_price}:
            <span className='OnePieceSum'>
              &nbsp;
              {house.currency.symbol}&nbsp;
              {house.wholeHomePrice.toLocaleString()}
            </span>
          </div>
        </Grid>
        <Grid item lg={3} md={5} sm={5} xl={3} xs={4}>
          <div className='TableHeadingSum'>
            {house.currency.symbol}&nbsp;
            {house.price.toLocaleString()}
          </div>
        </Grid>
        <Grid item lg={9} md={7} sm={7} xl={9} xs={8}>
          <div className='TableHeading'>{booking.house.upgrades_closing}</div>
          <div className='TextLower'>{booking.house.upgrades_closing_more}</div>
        </Grid>
        <Grid item lg={3} md={5} sm={5} xl={3} xs={4}>
          <div className='TableHeadingSum'>
            {house.currency.symbol}&nbsp;
            {house.closingDeal.toLocaleString()}
          </div>
        </Grid>
        <Grid item lg={9} md={7} sm={7} xl={9} xs={8}>
          <div className='TableHeading'>{booking.house.service_fee}</div>
          <div className='TextLower'>{booking.house.service_fee_more}</div>
        </Grid>

        <Grid item lg={3} md={5} sm={5} xl={3} xs={4}>
          <div className='TableHeadingSum'>
            {house.currency.symbol}&nbsp;
            {house.serviceFee.toLocaleString()}
          </div>
        </Grid>
        <Grid item xs={12}>
          <hr className='RowLine2' />
        </Grid>
        <Grid item lg={9} md={7} sm={7} xl={9} xs={8}>
          <div className='TableHeadingLower'>{booking.house.total_8_price}</div>
          <div className='TextLower'>
            {booking.house.whole_home_value}:{' '}
            <span className='OnePieceSum'>
              {house.currency.symbol}&nbsp;
              {house.wholeHomeValue.toLocaleString()}
            </span>
          </div>
        </Grid>
        <Grid item lg={3} md={5} sm={5} xl={3} xs={4}>
          <div className='TableHeadingSumLower'>
            {house.currency.symbol}&nbsp;
            {house.totalShareOwnership.toLocaleString()}
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
)

export default OneEight
