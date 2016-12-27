import { GraphQLEnumType } from 'graphql'


export const LengthUnit = new GraphQLEnumType({
  name: 'LengthUnit',
  values: {
    CENTIMETRES: {
      value: 'CENTIMETRES'
    },
    MILLIMETRES: {
      value: 'MILLIMETRES'
    }
  }
})

export const TemperatureUnit = new GraphQLEnumType({
  name: 'TemperatureUnit',
  values: {
    CELSIUS: {
      value: 'CELSIUS'
    }
  }
})

export const WeightUnit = new GraphQLEnumType({
  name: 'WeightUnit',
  values: {
    GRAMMS: {
      value: 'GRAMMS'
    },
    KILOGRAMMS: {
      value: 'KILOGRAMMS'
    },
  }
})

export const BloodPressureUnit = new GraphQLEnumType({
  name: 'BloodPressureUnit',
  values: {
    MILLIMETER_OF_MERCURY: {
      value: 'MILLIMETER_OF_MERCURY'
    },
  }
})

export const PulseUnit = new GraphQLEnumType({
  name: 'PulseUnit',
  values: {
    BEATS_PER_MINUTE: {
      value: 'BEATS_PER_MINUTE'
    },
  }
})
