export const signupQuery = `mutation registerPatient ($input: RegisterInput!) {
  register(input: $input) {
  	id
    email
    firstName
    lastName
  }
}`
