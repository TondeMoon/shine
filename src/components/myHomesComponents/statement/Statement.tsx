/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { VictoryPie } from 'victory-pie'
import { VictoryLegend, VictoryLabel, VictoryTooltip } from 'victory'
import { Grid } from '@mui/material'

import { sortingMonthCosts, sortingMonthCostsNames } from '../../../utils/functions'
import LineGraph from '../lineGraph/LineGraph'
import statements from '../../../utils/statements.json'
import DropdownTwo from '../dropdownTwo/DropdownTwo'
import './Statement.scss'

// @ts-ignore
class CustomLabel extends React.Component {
  render() {
    return (
      <g>
        {/* @ts-ignore */}
        <VictoryLabel {...this.props} style={{ fontFamily: 'Montserrat, serif', fontSize: '16px', fill: 'white' }} />
        <VictoryTooltip
          {...this.props}
          cornerRadius={89}
          flyoutHeight={180}
          flyoutStyle={{ fill: '#411432', stroke: 'transparent' }}
          flyoutWidth={180}
          labelComponent={<VictoryLabel lineHeight={1.5} />}
          orientation='top'
          pointerLength={0}
          style={{
            fontFamily: 'Montserrat, serif',
            fontSize: '16px',
            lineHeight: '22px',
            fill: 'white',
          }}
          text={({ datum }) => `${datum.x.replaceAll(' ', '\n')} \n ${datum.share}`}
          x={201}
          y={287}
        />
      </g>
    )
  }
}

// @ts-ignore
CustomLabel.defaultEvents = VictoryTooltip.defaultEvents

// @ts-ignore
export default function Statement({ houses }): JSX.Element {
  const [value, setValue] = React.useState(
    `${houses.costs[houses.costs.length - 1].month} ${houses.costs[houses.costs.length - 1].year}`
  )

  const myData = sortingMonthCosts(houses.monthCosts?.[value.replace(' ', ',').split(',')[0]])
  const nameData = sortingMonthCostsNames(houses.monthCosts?.[value.replace(' ', ',').split(',')[0]], houses)
  const colorArray = ['#1F2C5C', 'tomato', 'orange', 'gold', '#81D4FA', 'teal', 'navy', 'purple']
  const year = false

  return (
    <div className='statementWrap'>
      <Grid container sx={{ p: 3, px: 4 }}>
        <Grid item sx={{ display: 'flex', alignItems: 'center', py: 2 }} xs={12}>
          <h2 className='graphTitle'>{statements.h1}</h2>
        </Grid>
        <Grid item sx={{ pb: 2 }} xs={12}>
          <DropdownTwo houses={houses} setValue={setValue} value={value} year={year} />
        </Grid>
        <Grid item xs={12}>
          <div className='chartWrap'>
            <VictoryPie
              colorScale={colorArray}
              data={myData}
              innerRadius={110}
              labelComponent={<CustomLabel />}
              labelRadius={133}
              labels={({ datum }) => datum.share}
              radius={180}
              standalone
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid className='colorDot' container>
            <Grid item>
              <VictoryLegend
                colorScale={colorArray}
                data={nameData}
                height={450}
                labelComponent={
                  <VictoryLabel
                    inline
                    lineHeight={[1, 1, 3]}
                    style={{ fontFamily: 'Montserrat, serif', fontSize: '22px' }}
                  />
                }
                orientation='vertical'
                padding={{ top: 20, bottom: 60 }}
                rowGutter={20}
                standalone
                style={{
                  border: { stroke: 'transparent' },
                  title: { fontSize: '22px', fontFamily: 'Montserrat, serif', fontWeight: 600 },
                }}
                title={`${statements.modal.total} : ${houses?.currency?.symbol} ${houses.costs
                  ?.find((el: any) => el.month === value.replace(' ', ',').split(',')[0])
                  ?.value?.toLocaleString()}`}
                titleOrientation='bottom'
                width={500}
                x={0}
                y={0}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LineGraph houses={houses} />
    </div>
  )
}
