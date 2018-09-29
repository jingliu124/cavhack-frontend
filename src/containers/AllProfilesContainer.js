import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

// Hardcoded users for All Profiles page
const users = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Joe',
    lastName: 'Somebody',
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Doe',
  },
  {
    id: 4,
    firstName: 'Sally',
    lastName: 'Doe',
  }
]

class AllProfilesContainer extends Component {
  render() {

    // ADD MAPPING FOR ALL USERS TO DYNAMICALLY CREATE CARDS HERE

    return (
      <Grid>
        <Row>

          {/* ADD ALL PROFILES CREATED ABOVE HERE */}
          <Col xs={6} md = {4} lg = {3}>
            <Thumbnail src = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/39023659_294649827935526_5623400942645805056_o.jpg?_nc_cat=110&oh=ab8d66cfb1aad0dd6a3d9139891be1e2&oe=5C26E69A">
              <h3>Jing Liu</h3>
              <p>
                <Button bsStyle = "primary" href = "/">View Profile</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md = {4} lg = {3}>
            <Thumbnail src = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/42271826_266249107347990_2681288146624184320_o.jpg?_nc_cat=101&oh=b3b32ba333b3d1c345282aa1cfebcbeb&oe=5C14543C">
              <h3>Daniel Zeng</h3>
              <p>
                <Button bsStyle = "primary" href = "/1">View Profile</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default AllProfilesContainer