export const loginQuery = `mutation loginPatient($input: LoginInput!) {
  login(input: $input) {
    token
  }
}`
