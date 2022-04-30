/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Thumbs, Keyboard } from 'swiper'
import { Grid } from '@mui/material'

import './ImagesSwiper.scss'
// import StatusLabel from '../../staysPageComponents/statusLable/StatusLabel'

SwiperCore.use([Pagination, Navigation, Thumbs, Keyboard])

// @ts-ignore
function ImagesSwiper({ data, status }): JSX.Element {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      {data && data.length > 0 && (
        <Grid container spacing={2}>
          <Grid className='ImageContainer' item xl={12}>
            <Swiper
              initialSlide={0}
              keyboard={{
                enabled: true,
                onlyInViewport: false,
              }}
              loop
              navigation
              slidesPerView={1}
              spaceBetween={5}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {data?.map((item: string, index: number) => (
                <div key={index}>
                  <SwiperSlide key={index}>
                    <img alt='house' className='Image' src={item} />
                    {/*  {status && <StatusLabel objectPage start={new Date()} status={status} />} */}
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </Grid>
          <Grid item xs={12}>
            <Swiper
              className='Swiper'
              // @ts-ignore
              onSwiper={setThumbsSwiper}
              slideToClickedSlide
              slidesPerView={2}
              spaceBetween={10}
              watchSlidesProgress
            >
              {data?.map((item: string, index: number) => (
                <div key={index}>
                  <SwiperSlide key={index}>
                    <img alt='house2' className='Thumb' src={item} />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ImagesSwiper
