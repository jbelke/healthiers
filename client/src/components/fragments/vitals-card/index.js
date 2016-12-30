import React from 'react'
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../../ui/card'
import { Icon } from '../../ui/icon'
import last from 'mini-dash/last'
import isDefined from 'mini-dash/isDefined'

import { dataContainer, graphContainer, vitalsIcon, textContainer, valueText, noDataText } from './style'

const unitNames = {
  CENTIMETRES: 'cm',
  KILOGRAMMS: 'kg',
  CELSIUS: '°C',
  BEATS_PER_MINUTE: 'bpm',
  MILLIMETER_OF_MERCURY: 'mmHg'
}

const stringify = ({value, unit}) => (isDefined(value) && isDefined(unit)) ? `${value}${unitNames[unit]}` : 'No data'
const createGraph = data => {
  if (!data || data.length === 0) {
    return <div className={noDataText}>No data</div>
  }
  return <ResponsiveContainer height={60} width='100%'>
    <LineChart data={data}>
      <Line type='monotone' dataKey='value' stroke='#666' strokeWidth={2} />
      <Tooltip labelStyle={{ fontFamily: 'Raleway' }} itemStyle={{ fontFamily: 'Raleway' }} />
    </LineChart>
  </ResponsiveContainer>

}
export const VitalsCard = ({ icon, name, columns, data}) => {
  const text = stringify(last(data) || {})

  return <Card columns={columns}>
    <div className={dataContainer}>
      <Icon className={vitalsIcon} name={icon} />
      <div className={textContainer}>
        <span>{name}</span>
        <span className={valueText}>{text}</span>
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
    <div className={graphContainer}>
      {createGraph(data)}
    </div>
  </Card>
}
