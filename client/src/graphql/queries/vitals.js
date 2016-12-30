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
