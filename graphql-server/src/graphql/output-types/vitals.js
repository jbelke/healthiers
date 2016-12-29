import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql'
import { LengthUnit, WeightUnit, BloodPressureUnit, PulseUnit, TemperatureUnit } from '../enum-types/units'
import { resolveISODate } from '../resolvers/common'

const recordType = (name, valueType, unitType) => new GraphQLObjectType({
  name,
  fields: () => ({
    id: { type: GraphQLID },
    value: { type: valueType },
    unit: { type: unitType },
    date: {
      type: GraphQLString,
      resolve: resolveISODate('date')
    }
  })
})

export const BloodPressureReading = new GraphQLObjectType({
  name: 'BloodPressureReading',
  fields: () => ({
    systolic: { type: GraphQLInt },
    diastolic: { type: GraphQLInt }
  })
})

export const HeightRecord = recordType('HeightRecord', GraphQLFloat, LengthUnit)
export const WeightRecord = recordType('WeightRecord', GraphQLFloat, WeightUnit)
export const BloodPressureRecord = recordType('BloodPressureRecord', BloodPressureReading, BloodPressureUnit)
export const PulseRecord = recordType('PulseRecord', GraphQLInt, PulseUnit)
export const TemperatureRecord = recordType('TemperatureRecord', GraphQLFloat, TemperatureUnit)

export const Vitals = new GraphQLObjectType({
  name: 'Vitals',
  fields: () => ({
    height: {
      type: new GraphQLNonNull(new GraphQLList(HeightRecord)),
    },
    weight: {
      type: new GraphQLNonNull(new GraphQLList(WeightRecord)),
    },
    pulse: {
      type: new GraphQLNonNull(new GraphQLList(PulseRecord)),
    },
    bloodPressure: {
      type: new GraphQLNonNull(new GraphQLList(BloodPressureRecord)),
    },
    temperature: {
      type: new GraphQLNonNull(new GraphQLList(TemperatureRecord)),
    }
  })
})
