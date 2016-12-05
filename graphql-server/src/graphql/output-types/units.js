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
