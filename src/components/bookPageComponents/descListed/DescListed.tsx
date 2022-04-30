/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/no-danger */
import * as React from 'react'
import { Grid } from '@mui/material'

import { HouseInterface } from '../../../interfaces/HouseInterface'
import OneEight from '../oneEight'
import './DescListed.scss'

function DescListed({ house }: HouseInterface): JSX.Element {
  const [isTruncated, setIsTruncated] = React.useState(true)

  const toggleTruncated = () => {
    setIsTruncated(!isTruncated)
  }

  const resultArray = isTruncated ? house?.description?.slice(0, 600) : house?.description

  function createMarkup() {
    return { __html: resultArray }
  }

  const buttonName = isTruncated ? 'More' : 'Less'

  return (
    <Grid className='desc-and-listed' container>
      <>
        <Grid className='desc' item lg={6} md={6} sm={6} xl={6} xs={12}>
          <div className='ParameterHeadingNoPadding'>About this home</div>
          <div className='desc-wrapper'>
            <span className='desc-text' dangerouslySetInnerHTML={createMarkup()} />
            {isTruncated && house?.description?.length > 600 && <span>...</span>}&nbsp;
            {house?.description?.length > 600 && (
              <span className='transparent-button truncText' onClick={toggleTruncated} role='button'>
                {buttonName}
              </span>
            )}
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xl={6} xs={12}>
          <OneEight house={house} />
        </Grid>
      </>
    </Grid>
  )
}

export default DescListed
