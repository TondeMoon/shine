/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react'
import { VictoryChart, Flyout, VictoryArea, VictoryTooltip, VictoryVoronoiContainer, VictoryScatter } from 'victory'
import { Grid } from '@mui/material'

import { sortMonthYearReverse } from '../../../utils/functions'
import statements from '../../../utils/statements.json'
import './LineGraph.scss'
import DropdownTwo from '../dropdownTwo/DropdownTwo'

// @ts-ignore
export default function Statement({ houses }): JSX.Element {
  const dataGraph = sortMonthYearReverse(houses.costs).map((el: any) => ({
    x: el.month,
    y: el.value,
  }))

  const maxDomain = houses.costs.reduce((a: any, b: any) => (a.value < b.value ? b : a)).value * 1.4
  const [val, setVal] = useState(`${houses.costs[houses.costs.length - 1].year}`)
  const year = true

  return (
    <div className='linegraphWrap'>
      <hr className='dividerGraph' />
      <Grid container sx={{ px: 4, pt: 4 }}>
        <Grid item sx={{ display: 'flex', alignItems: 'center', pb: 2 }} xs={12}>
          <h2 className='graphTitleLower'>{statements.history}</h2>
        </Grid>
        <Grid item sx={{ pb: 2 }} xs={12}>
          <DropdownTwo houses={houses} setValue={setVal} value={val} year={year} />
        </Grid>
      </Grid>
      <Grid container sx={{ py: 3, px: 4, pt: 0 }}>
        <VictoryChart
          containerComponent={
            <VictoryVoronoiContainer
              labelComponent={
                <VictoryTooltip
                  centerOffset={{ x: 28, y: 0 }}
                  cornerRadius={10}
                  flyoutComponent={<Flyout pointerLength={0} />}
                  flyoutPadding={{ top: 5, bottom: 5, left: 15, right: 15 }}
                  flyoutStyle={{ fill: '#7E7CCF', stroke: 'transparent' }}
                />
              }
              labels={({ datum }) => datum.y?.toLocaleString()}
              voronoiBlacklist={['line1']}
              voronoiDimension='x'
            />
          }
          domain={{ y: [0, maxDomain] }}
        >
          <VictoryArea
            data={dataGraph}
            interpolation='catmullRom'
            style={{
              data: {
                fill: 'url(#linear)',
                fillOpacity: 0.7,
                stroke: '#7E7CCF',
                strokeWidth: 2,
              },
              // @ts-ignore
              labels: {
                fontSize: 14,
                fontFamily: 'Montserrat, serif',
                fill: '#ffffff',
              },
            }}
          />
          <defs>
            <linearGradient id='linear' x1='0%' x2='0%' y1='0%' y2='100%'>
              <stop offset='0%' stopColor='#7E7CCF' />
              <stop offset='100%' stopColor='rgba(189, 188, 219, 0)' />
            </linearGradient>
          </defs>
          <VictoryScatter
            bubbleProperty='y'
            data={dataGraph}
            labels={() => null}
            maxBubbleSize={10}
            minBubbleSize={5}
            name='line1'
            style={{ data: { fill: '#7E7CCF', stroke: '#fff', strokeWidth: 3 } }}
          />
        </VictoryChart>
      </Grid>
    </div>
  )
}
