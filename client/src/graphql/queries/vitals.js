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

export const addWeight = `mutation addWeight($input:WeightInput!){
  addWeight(input: $input) {
    id
  }
}`

export const addHeight = `mutation addHeight($input:HeightInput!){
  addHeight(input: $input) {
    id
  }
}`

export const addBloodPressure = `mutation addBloodPressure($input:BloodPressureInput!){
  addBloodPressure(input: $input) {
    id
  }
}`

export const addPulse = `mutation addPulse($input:PulseInput!){
  addPulse(input: $input) {
    id
  }
}`

export const addTemperature = `mutation addTemperature($input:TemperatureInput!){
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
