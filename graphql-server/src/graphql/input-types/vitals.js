import { GraphQLInputObjectType, GraphQLNonNull, GraphQLFloat, GraphQLInt, GraphQLString } from 'graphql'
import { LengthUnit, WeightUnit, BloodPressureUnit, PulseUnit, TemperatureUnit } from '../enum-types/units'

const createInputType = (name, valueType, unitType) => new GraphQLInputObjectType({
  name,
  fields: () => ({
    value: { type: new GraphQLNonNull(valueType) },
    unit: { type: new GraphQLNonNull(unitType) }
  })
})

export const HeightInput = createInputType('HeightInput', GraphQLFloat, LengthUnit)
export const WeightInput = createInputType('WeightInput', GraphQLFloat, WeightUnit)
export const BloodPressureInput = createInputType('BloodPressureInput', GraphQLString, BloodPressureUnit)
export const PulseInput = createInputType('PulseInput', GraphQLInt, PulseUnit)
export const TemperatureInput = createInputType('TemperatureInput', GraphQLFloat, TemperatureUnit)
