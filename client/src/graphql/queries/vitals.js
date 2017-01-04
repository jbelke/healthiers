const createFragment = name => `fragment ${name}Fragment on Vitals {
  ${name} {
    id
    value
    unit
    date
  }
}`

const _fragments = {
  weight: createFragment('weight'),
  height: createFragment('height'),
  bloodPressure: createFragment('bloodPressure'),
  pulse: createFragment('pulse'),
  temperature: createFragment('temperature'),
}

export const vitalsQuery = fragments => `query VitalsForPatient {
  patient {
    vitals {
      ${ fragments.map(name => `...${name}Fragment`).join('\n')}
    }
  }
}
${ fragments.map(name => _fragments[name]).join('\n')}`

export const addWeight = `mutation AddWeight($input:WeightInput!){
  addWeight(input: $input) {
    id
  }
}`

export const addHeight = `mutation AddHeight($input:HeightInput!){
  addHeight(input: $input) {
    id
  }
}`

export const addBloodPressure = `mutation AddBloodPressure($input:BloodPressureInput!){
  addBloodPressure(input: $input) {
    id
  }
}`

export const addPulse = `mutation AddPulse($input:PulseInput!){
  addPulse(input: $input) {
    id
  }
}`

export const addTemperature = `mutation AddTemperature($input:TemperatureInput!){
  addTemperature(input: $input) {
    id
  }
}`

const _adders = {
  weight: addWeight,
  height: addHeight,
  bloodPressure: addBloodPressure,
  temperature: addTemperature,
  pulse: addPulse
}

export const addVitalsQuery = type => _adders[type]
