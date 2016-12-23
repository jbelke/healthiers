import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { Card, CardContainer } from '../../ui/card'
import { EditableLabel } from '../../ui/editable-label'
import { Section, SectionContent, SectionHeader } from '../../ui/section'
import { Icon } from '../../ui/icon'
import { dataContainer, graphContainer, vitalsIcon, textContainer, valueText, valueInput } from './style'

export const VitalsCard = ({ icon, value, name, columns, data}) => (<Card columns={columns}>
  <div className={dataContainer}>
    <Icon className={vitalsIcon} name={icon} />
    <div className={textContainer}>
      <span>{name}</span>
      <EditableLabel labelClass={valueText} inputClass={valueInput} text={value} />
    </div>
  </div>
  <div className={graphContainer}>
    <ResponsiveContainer height={60} width='100%'>
      <LineChart data={data}>
        <Line type='monotone' dataKey='pv' stroke='#888' strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
</Card>)

export const VitalsSection = ({ children }) => (<Section>
  <SectionHeader title="Vitals" />
  <SectionContent>
    <CardContainer>
      {children}
    </CardContainer>
  </SectionContent>
</Section>)
