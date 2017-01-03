import React from 'react'
import last from 'mini-dash/last'
import isDefined from 'mini-dash/isDefined'
import formatDate from 'date-fns/format'
import { ResponsiveContainer, LineChart, Line, Tooltip, YAxis } from 'recharts'

import { Card } from '../../ui/card'
import { Icon } from '../../ui/icon'

import {
  dataContainer, left, right, bottom,
  vitalsIcon, title, editorContainer, valueEditor, unitText, textEditor,
  tooltipContainer, tooltipValue, tooltipDate, noDataText
} from './style'

const unitNames = {
  CENTIMETRES: 'cm',
  KILOGRAMMS: 'kg',
  CELSIUS: '°C',
  BEATS_PER_MINUTE: 'bpm',
  MILLIMETER_OF_MERCURY: 'mmHg'
}

const stringify = ({value, unit}) => (isDefined(value) && isDefined(unit)) ? `${value}${unitNames[unit]}` : 'No data'

const VitalsTooltip = ({active, payload}) => {
  if (active) {
    const data = payload[0].payload
    const valueString = stringify(data)
    const dateString = formatDate(new Date(data.date), 'YYYY.MM.DD')

    return <div className={tooltipContainer}>
      <div className={tooltipValue}>{valueString}</div>
      <div className={tooltipDate}>{dateString}</div>
    </div>
  }
  return null
}

const NoChart = () => (<div className={noDataText}>No data</div>)

const VitalsChart = ({data}) => (<ResponsiveContainer height={68}>
  <LineChart data={data} >
    <YAxis type='number' dataKey='value' domain={['dataMin', 'dataMax']} hide />
    <Line type="monotone" dataKey="value" stroke="#666" />
    <Tooltip content={<VitalsTooltip />} />
  </LineChart>
</ResponsiveContainer>)

export const VitalsCard = ({icon, name, data}) => {
  const lastData = last(data) || {}
  const {unit = '', value = ''} = lastData

  return <Card>
    <div className={dataContainer}>
      <div className={left}>
        <Icon className={vitalsIcon} name={icon} />
      </div>
      <div className={right}>
        <span className={title}>{name}</span>
        <div className={editorContainer}>
          <div type='text' className={valueEditor}>
            <input className={textEditor} type='text' value={value} />
          </div>
          <span className={unitText}>{unitNames[unit]}</span>
        </div>
      </div>
    </div>
    <div className={bottom}>
      {(data && data.length) ? (<VitalsChart data={data} />) : (<NoChart />)}
    </div>
  </Card>
}
