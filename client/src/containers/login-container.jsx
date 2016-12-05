import { Component } from 'react'
import { Grid, Segment, Input, Button } from 'semantic-ui-react'

export default class LoginContainer extends Component {
  render() {
    return <Grid centered verticalAlign="middle" style={{ minHeight: '100vh'}}>
      <Grid.Column style={{ maxWidth: '450px' }}>
        <Segment stacked>
          <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' style={{ marginBottom: '10px' }} />
          <Input fluid icon='lock' iconPosition='left' placeholder='Password' style={{ marginBottom: '10px' }} type="password" />
          <Button fluid primary>LOGIN</Button>
        </Segment>
      </Grid.Column>
    </Grid>
  }
}