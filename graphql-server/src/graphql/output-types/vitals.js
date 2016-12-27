import { GraphQLObjectType, GraphQLFloat, GraphQLInt, GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql'
import { LengthUnit, WeightUnit, BloodPressureUnit, PulseUnit, TemperatureUnit } from './units'

export const HeightRecord = new GraphQLObjectType({
  name: 'HeightRecord',
  fields: () => ({
    value: {
      type: GraphQLFloat
    },
    unit: {
      type: LengthUnit
    }
  })
})

export const WeightRecord = new GraphQLObjectType({
  name: 'WeightRecord',
  fields: () => ({
    value: {
      type: GraphQLFloat
    },
    unit: {
      type: WeightUnit
    }
  })
})

export const BloodPressureReading = new GraphQLObjectType({
  name: 'BloodPressureReading',
  fields: () => ({
    systolic: {
      type: GraphQLInt
    },
    diastolic: {
      type: GraphQLInt
    }
  })
})

export const BloodPressureRecord = new GraphQLObjectType({
  name: 'BloodPressureRecord',
  fields: () => ({
    value: {
      type: BloodPressureReading
    },
    unit: {
      type: BloodPressureUnit
    }
  })
})

export const PulseRecord = new GraphQLObjectType({
  name: 'PulseRecord',
  fields: () => ({
    value: {
      type: GraphQLInt
    },
    unit: {
      type: PulseUnit
    }
  })
})

export const TemperatureRecord = new GraphQLObjectType({
  name: 'TemperatureRecord',
  fields: () => ({
    value: {
      type: GraphQLFloat
    },
    unit: {
      type: TemperatureUnit
    }
  })
})

export const Vitals = new GraphQLObjectType({
  name: 'Vitals',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
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
