import { Component } from 'react'
import { Menu, Grid, Container, Segment, Label, Header, Image, Icon } from 'semantic-ui-react'

export default class MainContainer extends Component {
  render() {
    return <Container style={{ marginTop: '20px' }}>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <Menu secondary>
              <Menu.Item fitted>
                <Header>
                  <Image src='https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg' size='mini' shape='circular' verticalAlign="middle" />
                  Healthiers
                </Header>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item name='logout' icon="lock" />
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={16}>
          <Grid.Column width={4}>
            <Menu vertical pointing fluid>
              <Menu.Item active={true}>
                <span><Icon name="mail" /> Messages</span>
                <Label color='blue'>3</Label>
              </Menu.Item>
              <Menu.Item>
                <span><Icon name="calendar" /> Appointments</span>
              </Menu.Item>
              <Menu.Item>
                <span><Icon name="hospital" /> Hospitals</span>
              </Menu.Item>
              <Menu.Item>
                <span><Icon name="plus" /> Doctors</span>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment>
              This is a panel for content
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  }
}