import React from 'react'
import last from 'mini-dash/last'
import isDefined from 'mini-dash/isDefined'
import { ResponsiveContainer, LineChart, Line, Tooltip, YAxis } from 'recharts'

import { Card } from '../../ui/card'
import { Icon } from '../../ui/icon'

import { dataContainer, graphContainer, vitalsIcon, textContainer, valueText, noDataText } from './style'

const unitNames = {
  CENTIMETRES: 'cm',
  KILOGRAMMS: 'kg',
  CELSIUS: '°C',
  BEATS_PER_MINUTE: 'bpm',
  MILLIMETER_OF_MERCURY: 'mmHg'
}

const stringify = ({value, unit}) => (isDefined(value) && isDefined(unit)) ? `${value}${unitNames[unit]}` : 'No data'

const NoChart = () => (<div className={noDataText}>No data</div>)

const VitalsChart = ({data}) => (<ResponsiveContainer height={60}>
  <LineChart data={data} >
    <YAxis type='number' dataKey='value' domain={['dataMin', 'dataMax']} hide />
    <Line type="monotone" dataKey="value" stroke="#666" />
    <Tooltip labelStyle={{ fontFamily: 'Raleway' }} itemStyle={{ fontFamily: 'Raleway' }} />
  </LineChart>
</ResponsiveContainer>)

export const VitalsCard = ({icon, name, data}) => {
  const text = stringify(last(data) || {})

  return <Card columns={1}>
    <div className={dataContainer}>
      <Icon className={vitalsIcon} name={icon} />
      <div className={textContainer}>
        <span>{name}</span>
        <span className={valueText}>{text}</span>
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
    <div className={graphContainer}>
      {data && data.length ? <VitalsChart data={data} /> : <NoChart />}
    </div>
  </Card>
}
