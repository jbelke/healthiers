import React from 'react'
import { VitalsCard, VitalsSection } from '../../fragments/vitals'

const dummyChartData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
]

export const RecordsContainer = () => <div>
  <VitalsSection>
    <VitalsCard name="Height" icon="arrowsV" value="175cm" data={dummyChartData} />
    <VitalsCard name="Weight" icon="balanceScale" value="70kg" data={dummyChartData} />
    <VitalsCard name="Temperature" icon="thermometerHalf" value="37°C" data={dummyChartData} />
    <VitalsCard name="Pulse" icon="heartbeat" value="75bpm" data={dummyChartData} />
    <VitalsCard name="Blood pressure" icon="barChart" value="125/82" data={dummyChartData} />
  </VitalsSection>
</div>
