import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    // State variables to be tracked in the component
    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    // ADD FUNCTION BINDINGS HERE

  }

  componentDidMount() {

    // ADD CHECK FOR USER QUERY PARAMETER HERE

  }

  // ADD FUNCTION TO HANDLE OPENING THE MODAL HERE (with "type" variable)
  handleModalOpen(type) { }

  // ADD FUNCTION TO HANDLE CLOSING THE MODAL HERE
  handleModalClose() { }

  // ADD FUNCTION TO TRACK TEXT CHANGES HERE (with event variable)
  handleTextChange(e) { }

  // ADD FUNCTION TO HANDLE SUBMITTING "ADD" FORM HERE
  handleAddSubmit() { }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid valign-wrapper">
            <Col xs={12} md={8} lg={4}>
              {/* ADD PROFILE IMAGE HERE */}
              <Image src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/39023659_294649827935526_5623400942645805056_o.jpg?_nc_cat=110&oh=ab8d66cfb1aad0dd6a3d9139891be1e2&oe=5C26E69A"
                thumbnail />
            </Col>
            <Col xs={12} md={4} lg={8}>
              {/* ADD PAGE HEADER WITH NAME AND ABOUT ME HEADINGS HERE */}
              <h1 id="name">Jing Liu</h1>
              <h3><b>About me</b></h3>
              {/* ADD ABOUT ME DESCRIPTION HERE */}
              <p id = "about-me">Hello! My name is Jing Liu and I'm a sophomore at Thomas Jefferson High School for Science and Technology.</p>
            </Col>
          </Row>
          <Row className="show-grid">

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}
              <h3 class = "header">Interests</h3>
              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}
              <Panel>
                <Panel.Body className="test">
                  <ul>
                    <li id="hello">Biology</li>
                    <li id="i2">Latin</li>
                    <li id="i3">Violin</li>
                    <li id="i4">My Chinese Ancestral Roots</li>
                  </ul>
                </Panel.Body>
              </Panel>
              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}
              <button>Tell me more!</button>
              <h3 class = "header">Skills</h3>
              <Panel>
                <Panel.Body className="test">
                  <ul>
                    <li>Violin</li>
                    <li>Singing</li>
                    <li>Latin</li>
                    <li>Chinese</li>
                    <li>Biology</li>
                  </ul>
                </Panel.Body>
              </Panel>
              <button>Tell me more!</button>
              <h3 class = "header">Education</h3>
              <Panel>
                <Panel.Body className="test">
                  <p class = "school">Canterbury Woods Elementary School : 2011-2015</p>
                  <p class = "school">Frost Middle School : 2015-2017</p>
                  <p class = "school">Thomas Jefferson High School for Science and Technology : 2017-present</p>
                </Panel.Body>
              </Panel>
              <button>Tell me more!</button>
              <h3 class = "header">School Schedule</h3>
              <Panel>
                <Panel.Body className="test">
                  <ol>
                    <li>Data Stuctures + AP Computer Science A+</li>
                    <li>AP Biology</li>
                    <li>AP Calculus BC</li>
                    <li>Latin II</li>
                    <li>Chemistry Honors</li>
                    <li>English 10 Honors</li>
                    <li>World History/Geography 2</li>
                  </ol>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>

        {/* ADD MODAL HERE */}

      </div>
    )
  }
}

// Uses withRouter to grab query paramters in URL (ex: http://localhost:3000?user=1 where user is the query parameter)
export default withRouter(MyProfileContainer)