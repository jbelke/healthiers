import { HeightInput, WeightInput } from '../input-types/vitals'
import { HeightRecord, WeightRecord } from '../output-types/vitals'
import { mutations } from '../resolvers/vitals'

export const addHeight = {
  type: HeightRecord,
  args: {
    input: {
      type: HeightInput
    }
  },
  resolve: mutations.addHeight
}

export const addWeight = {
  type: WeightRecord,
  args: {
    input: {
      type: WeightInput
    }
  },
  resolve: mutations.addWeight
}
