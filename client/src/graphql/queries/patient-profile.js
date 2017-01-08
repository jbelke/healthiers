import { fieldsToGraphql } from './utils'

export const patientProfileQuery = (fields = []) => `query Patient {
  patient {
    ${fieldsToGraphql(fields)}
  }
}`
