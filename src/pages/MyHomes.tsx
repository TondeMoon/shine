/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-magic-numbers */
import { Grid } from '@mui/material'

import HouseBlock from '../components/myHomesComponents/houseBlock'
import houses from '../utils/houses.json'
import '../pageStyles/myHomes.scss'

export default function StaysPage(): JSX.Element {
  return (
    <div className='houses-wrapper'>
      <Grid container sx={{ maxWidth: '1440px', marginLeft: 'auto', marginRight: 'auto' }}>
        {/* @ts-ignore */}
        {houses.map((el, index) => (
          <Grid item key={index} lg={4} md={6} sm={6} sx={{ mr: 4, mb: 4 }} xl={4} xs={12}>
            <HouseBlock item={el} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
