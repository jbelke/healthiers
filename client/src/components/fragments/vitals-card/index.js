import React from 'react'
//import { } from 'victory-core'
import { VictoryChart, VictoryLine } from 'victory-chart'
import last from 'mini-dash/last'
import isDefined from 'mini-dash/isDefined'

import { Card } from '../../ui/card'
import { Icon } from '../../ui/icon'

import { dataContainer, vitalsIcon, textContainer, valueText, } from './style'

const unitNames = {
  CENTIMETRES: 'cm',
  KILOGRAMMS: 'kg',
  CELSIUS: '°C',
  BEATS_PER_MINUTE: 'bpm',
  MILLIMETER_OF_MERCURY: 'mmHg'
}

const stringify = ({value, unit}) => (isDefined(value) && isDefined(unit)) ? `${value}${unitNames[unit]}` : 'No data'

export const VitalsCard = ({ icon, name, data}) => {

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
  </Card>
}
