import { GraphQLInputObjectType, GraphQLNonNull, GraphQLFloat, GraphQLInt } from 'graphql'
import { LengthUnit, WeightUnit, /*BloodPressureUnit, PulseUnit, TemperatureUnit */ } from '../enum-types/units'

export const HeightInput = new GraphQLInputObjectType({
  name: 'HeightInput',
  fields: () => ({
    value: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
    unit: {
      type: new GraphQLNonNull(LengthUnit)
    }
  })
})

export const WeightInput = new GraphQLInputObjectType({
  name: 'WeightInput',
  fields: () => ({
    value: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    unit: {
      type: new GraphQLNonNull(WeightUnit)
    }
  })
})
