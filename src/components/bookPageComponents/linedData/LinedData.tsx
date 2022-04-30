/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import { Grid } from '@mui/material'

import { HouseInterface } from '../../../interfaces/HouseInterface'
import bed from '../../../images/bed1.svg'
import bath from '../../../images/bath.svg'
import living from '../../../images/livingSq.svg'
import rooms from '../../../images/rooms.svg'
import area from '../../../images/area.svg'
import booking from '../../../utils/booking.json'
import './LinedData.scss'

function LinedData({ house }: HouseInterface): JSX.Element {
  const checkAttr = () => {
    if (house) {
      const attributes = ['bathroomsCount', 'bedroomsCount', 'square', 'plotSquare', 'livingSquare']
      const res = Object.keys(house)
      return res.some((el) => attributes.includes(el))
    }
    return ''
  }

  return (
    <>
      <div className='PageMobile'>
        <div className='RowLine'>
          <hr />
        </div>
        {checkAttr() && (
          <>
            <Grid className='attr-container' container spacing={4}>
              <Grid className='SecondBlock' item lg={4} md={6} xl={4} xs={12}>
                <div className='ParameterHeading'>{booking.house.attributes}</div>
                <div className='ParameterColumns'>
                  {house.square && (
                    <div className='one-feature'>
                      <div className='IconPic'>
                        <img alt='area' height={21} src={area} width={20} />
                      </div>
                      <span className='X10'>
                        {house?.square && house?.square?.toLocaleString()}&nbsp; m<sup>2</sup>
                      </span>
                      <br />
                    </div>
                  )}
                  {house?.livingSquare && (
                    <div className='one-feature'>
                      <div className='IconPic'>
                        <img alt='house' height={20} src={living} width={20} />
                      </div>
                      <div className='X10'>
                        {house?.livingSquare?.toLocaleString()}&nbsp; m<sup>2</sup>
                      </div>
                    </div>
                  )}
                  {house?.plotSquare && (
                    <div className='one-feature'>
                      <div className='IconPic'>
                        <img alt='area' height={21} src={area} width={20} />
                      </div>
                      <div className='X10'>
                        {house?.plotSquare?.toLocaleString()}&nbsp; m<sup>2</sup>
                      </div>
                      <br />
                    </div>
                  )}
                  {house.roomsCount && (
                    <div className='one-feature'>
                      <div className='IconPic'>
                        <img alt='house' height={20} src={rooms} width={20} />
                      </div>
                      <div className='X10'>{house?.roomsCount}&nbsp; rooms</div>
                    </div>
                  )}
                  {house.bedroomsCount && (
                    <div className='one-feature'>
                      <div className='IconPic'>
                        <img alt='bed' height={21} src={bed} width={21} />
                      </div>
                      <div className='X10'> {house.bedroomsCount}&nbsp; beds</div>
                    </div>
                  )}
                  {house.bathroomsCount && (
                    <div className='one-feature'>
                      <div className='IconPic'>
                        <img alt='bath' height={23} src={bath} width={23} />
                      </div>
                      <div className='X10'> {house.bathroomsCount}&nbsp; baths</div>
                    </div>
                  )}
                </div>
              </Grid>
              <Grid item lg={8} md={6} xl={8} xs={12}>
                <div className='ParameterHeading'>{booking.house.address}</div>
                <div className='ParameterText'>{house.address}</div>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </>
  )
}

export default LinedData
