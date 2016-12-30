import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql'
import { LengthUnit, WeightUnit, BloodPressureUnit, PulseUnit, TemperatureUnit } from '../enum-types/units'
import { resolveISODate } from '../resolvers/common'
import { resolveVitalsOfType } from '../resolvers/vitals'

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

export const HeightRecord = recordType('HeightRecord', GraphQLFloat, LengthUnit)
export const WeightRecord = recordType('WeightRecord', GraphQLFloat, WeightUnit)
export const BloodPressureRecord = recordType('BloodPressureRecord', GraphQLString, BloodPressureUnit)
export const PulseRecord = recordType('PulseRecord', GraphQLInt, PulseUnit)
export const TemperatureRecord = recordType('TemperatureRecord', GraphQLFloat, TemperatureUnit)

export const Vitals = new GraphQLObjectType({
  name: 'Vitals',
  fields: () => ({
    height: {
      type: new GraphQLNonNull(new GraphQLList(HeightRecord)),
      resolve: resolveVitalsOfType('height')
    },
    weight: {
      type: new GraphQLNonNull(new GraphQLList(WeightRecord)),
      resolve: resolveVitalsOfType('weight')
    },
    pulse: {
      type: new GraphQLNonNull(new GraphQLList(PulseRecord)),
      resolve: resolveVitalsOfType('pulse')
    },
    bloodPressure: {
      type: new GraphQLNonNull(new GraphQLList(BloodPressureRecord)),
      resolve: resolveVitalsOfType('bloodPressure')
    },
    temperature: {
      type: new GraphQLNonNull(new GraphQLList(TemperatureRecord)),
      resolve: resolveVitalsOfType('temperature')
    }
  })
})
