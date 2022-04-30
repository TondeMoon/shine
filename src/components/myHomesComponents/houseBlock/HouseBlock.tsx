/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import './HouseBlock.scss'

// @ts-ignore
const HouseBlock = ({ item }): JSX.Element => {
  const classes = 'Heading'
  const classesText = 'Text'

  const headingSlice = () => {
    if (item?.name?.length > 30) {
      return `${item?.name?.slice(0, 30)}...`
    }
    return item?.name
  }

  return (
    <Card className='HouseBlock'>
      <Link style={{ textDecoration: 'none' }} to={`/demo/myhomes/${item._id}`}>
        <div className='ImageBig' style={{ backgroundImage: `url(${item.photos[0]})` }} />
        <CardContent className='Spaces'>
          <button className='ArrowForward' type='button' />
          <Typography className={classes} variant='h5'>
            {headingSlice()}
          </Typography>
          <div className={classesText}>{item.address}</div>
          <div>
            <hr className='RowLine' />
          </div>
          <Typography className='SumShares' variant='h5'>
            1 <span className='ShareWord'>share</span>
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default HouseBlock
