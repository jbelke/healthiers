import { HeightInput, WeightInput, BloodPressureInput, PulseInput, TemperatureInput } from '../input-types/vitals'
import { HeightRecord, WeightRecord, BloodPressureRecord, PulseRecord, TemperatureRecord } from '../output-types/vitals'
import { resolveAddHeight, resolveAddWeight, resolveAddPulse, resolveAddTemperature, resolveAddBloodPressure } from '../resolvers/vitals'

export const addHeight = {
  type: HeightRecord,
  args: {
    input: {
      type: HeightInput
    }
  },
  resolve: resolveAddHeight
}

export const addWeight = {
  type: WeightRecord,
  args: {
    input: {
      type: WeightInput
    }
  },
  resolve: resolveAddWeight
}

export const addPulse = {
  type: PulseRecord,
  args: {
    input: {
      type: PulseInput
    }
  },
  resolve: resolveAddPulse
}

export const addBloodPressure = {
  type: BloodPressureRecord,
  args: {
    input: {
      type: BloodPressureInput
    }
  },
  resolve: resolveAddBloodPressure
}

export const addTemperature = {
  type: TemperatureRecord,
  args: {
    input: {
      type: TemperatureInput
    }
  },
  resolve: resolveAddTemperature
}
