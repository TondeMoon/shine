/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-danger */
import * as React from 'react'
import { Grid } from '@mui/material'

import './MainAttr.scss'

// @ts-ignore
function MainAttr({ data }): JSX.Element {
  const checkAttr = () => {
    const attributes = [
      'square',
      'buildingYear',
      'renovationYear',
      'plotSquare',
      'createdAt',
      'updatedAt',
      'livingSquare',
      'floor',
      'floors',
    ]
    const res = Object.keys(data)
    return res.some((el) => attributes.includes(el))
  }

  return (
    <>
      {checkAttr() && (
        <Grid className='attr-container' container>
          <Grid className='SecondBlock' item xs={12}>
            <div className='ParameterHeading'>Main Information</div>
            <div className='ParameterText'>
              <div className='feat-group'>
                {data.type && (
                  <div className='one-feat-main-info'>
                    <span className='prop-name-type'>Type:</span>
                    {`${data?.type?.slice(0, 1)}${data?.type?.slice(1)?.toLowerCase()}`}
                  </div>
                )}
              </div>
              <div className='feat-group'>
                {data.floor && (
                  <div className='one-feat-main-info'>
                    <span className='prop-name'>Floors:</span>
                    {data.floors}
                  </div>
                )}
                {data.floors && (
                  <div className='one-feat-main-info'>
                    <span className='prop-name'>Floor:</span>
                    {data.floor}
                  </div>
                )}
              </div>
              <div className='feat-group'>
                {data?.buildingYear && (
                  <div className='one-feat-main-info'>
                    <div className='prop-name'>Building year:</div>
                    {data?.buildingYear}
                  </div>
                )}
                {data?.renovationYear && (
                  <div className='one-feat-main-info'>
                    <div className='prop-name'>Renovation year:</div>
                    {data.renovationYear}
                  </div>
                )}
              </div>
              <div className='feat-group'>
                {data?.square && (
                  <div className='one-feat-main-info'>
                    <div className='prop-name'>Usable square:</div>
                    {data?.square}&nbsp; m<sup>2</sup>
                  </div>
                )}
                {data?.livingSquare && (
                  <div className='one-feat-main-info'>
                    <div className='prop-name'>Living square:</div>
                    {data.livingSquare}&nbsp; m<sup>2</sup>
                  </div>
                )}
              </div>
              <div className='feat-group'>
                {data?.updatedAt && (
                  <div className='one-feat-main-info'>
                    <div className='prop-name-date'>Updated:</div>
                    {new Date(data?.updatedAt).toLocaleDateString()}
                  </div>
                )}
                {data?.createdAt && (
                  <div className='one-feat-main-info'>
                    <div className='prop-name-date'>Created:</div>
                    {new Date(data?.createdAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      )}
      {checkAttr() && (
        <div className='RowLine'>
          <hr />
        </div>
      )}
    </>
  )
}

export default MainAttr
