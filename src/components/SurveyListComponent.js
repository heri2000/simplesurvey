import { Component } from 'react';
import { Container, Row, Col, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FadeTransform } from 'react-animation-components'
import "./SurveyListComponent.css"

class SurveyList extends Component {
  render() {
    return(
      <div className="SurveyList-bg">
        <FadeTransform in
          transformProps={{ exitTransform: 'translateY(20px)' }} className="col-12">
          <Container>
            <RenderHeader {...this.props} />
            <RenderList {...this.props} />
          </Container>
        </FadeTransform>
      </div>
    );
  }
}

function RenderHeader(props) {
  const handleLogout = () => {
    props.history.push("/");
  }
  return(
    <Row className="mt-4 rounded-2 bg-white bg-opacity-25 p-1">
      <Col className="col-10">
        <h3 className="text-center mt-1">Simple Survey</h3>
      </Col>
      <Col className="col-2 d-flex justify-content-end">
        <button onClick={handleLogout} className="btn btn-outline-light">
          Logout
        </button>
      </Col>
    </Row>
  );
}

class RenderList extends Component {
  constructor(props) {
    super(props);
    this.handleNewSurvey = this.handleNewSurvey.bind(this);
    this.handleEditSurvey = this.handleEditSurvey.bind(this);
    this.handleShowResult = this.handleShowResult.bind(this);
  }

  handleNewSurvey() {
    this.props.history.push("/edit");
  }

  handleEditSurvey() {
    this.props.history.push("/edit");
  }

  handleShowResult() {
    this.props.history.push("/result");
  }

  render() {
    return(
      <Row className="mt-4 mb-4 rounded-2 bg-white bg-opacity-25 p-2">
        <Col className="col-12">

          <Row className="rounded-2 bg-white bg-opacity-25 p-1">
            <Col className="col-10 mt-1">
              <h4 className="text-center">My Surveys</h4>
            </Col>
            <Col className="col-2 d-flex justify-content-end">
              <button className="btn btn-danger"
                onClick={this.handleNewSurvey}>
                New Survey
              </button>
            </Col>
          </Row>

          <Row>
            <Col className="col-12 mt-3">
              <RenderSurvey
                handleEditSurvey={this.handleEditSurvey}
                handleShowResult={this.handleShowResult}
                />
              <RenderSurvey
                handleEditSurvey={this.handleEditSurvey}
                handleShowResult={this.handleShowResult}
                />
              <RenderSurvey
                handleEditSurvey={this.handleEditSurvey}
                handleShowResult={this.handleShowResult}
                />
              <RenderSurvey
                handleEditSurvey={this.handleEditSurvey}
                handleShowResult={this.handleShowResult}
                />
              <RenderSurvey
                handleEditSurvey={this.handleEditSurvey}
                handleShowResult={this.handleShowResult}
                />
            </Col>
          </Row>

        </Col>
      </Row>
    );
  }
}

class RenderSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return(
      <Row className="rounded-2 bg-white bg-opacity-10 p-1 m-4">
        <Col className="col-12 col-md-9 mt-1">
          Survey Title
        </Col>
        <Col className="col-6 col-md-2 d-flex justify-content-end mt-1">
          0 responses
        </Col>
        <Col className="col-6 col-md-1 d-flex justify-content-end">
          <Dropdown isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
              direction="left">
            <DropdownToggle className="btn btn-outline-light SurveyList-toggle-button">
              <span className="fa fa-ellipsis-h"></span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.handleEditSurvey}>Edit</DropdownItem>
              <DropdownItem>Show URL</DropdownItem>
              <DropdownItem onClick={this.props.handleShowResult}>Show Result</DropdownItem>
              <DropdownItem>Delete Survey</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    );
  }
}

export default SurveyList;
