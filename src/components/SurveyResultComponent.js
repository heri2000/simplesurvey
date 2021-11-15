import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FadeTransform } from 'react-animation-components'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries } from 'react-vis';
import "./SurveyResultComponent.css"

const TEXT = "TEXT";
const MULTIPLE_CHOICE = "MULTIPLE_CHOICE";

class SurveyResult extends Component {
  render() {
    return(
      <div className="SurveyResult-bg">
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
    this.handleBackToList = this.handleBackToList.bind(this);
  }

  handleBackToList() {
    this.props.history.push("/list");
  }

  render() {
    return(
      <Row className="mt-4 mb-4 rounded-2 bg-white bg-opacity-25 p-2">
        <Col className="col-12">

          <Row className="rounded-2 bg-white bg-opacity-25 p-1">
            <Col className="col-10 mt-1">
              <h4 className="text-center">Survey Title</h4>
            </Col>
            <Col className="col-2 d-flex justify-content-end">
              <button className="btn btn-danger"
                onClick={this.handleBackToList}>
                Back to List
              </button>
            </Col>
          </Row>

          <Row>
            <Col className="col-12 mt-3">
              <RenderQuestion number={1} questionType={TEXT} />
              <RenderQuestion number={2} questionType={MULTIPLE_CHOICE} />
              <RenderQuestion number={3} questionType={TEXT} />
            </Col>
          </Row>

        </Col>
      </Row>
    );
  }
}

function RenderQuestion({questionType}) {
  const responses = [
    "Response 1",
    "Response 2",
    "Response 3",
    "Response 4"
  ];

  const answers = [
    {x: "Answer 1", y: 49},
    {x: "Answer 2", y: 32},
    {x: "Answer 3", y: 43},
    {x: "Answer 4", y: 11}
  ];

  let answerList = null;
  if (questionType === TEXT) {
    answerList = (
      <Col className="col-11 offset-1">
        {responses.map(res => {
          return(
            <div>{res}</div>
          );
        })}
      </Col>);
  } else if (questionType === MULTIPLE_CHOICE) {
    answerList = (
      <Row>
        <Col className="col-11 col-md-7 offset-1">
          {answers.map(ans => {
            return(
              <div>{ans.x} : {ans.y}</div>
            );
          })}
        </Col>
        <Col className="col-11 col-md-3 offset-1 offset-md-0">
        <XYPlot xType="ordinal" width={300} height={150} xDistance={100}>
          <HorizontalGridLines />
          <VerticalBarSeries data={answers} color="#88DDEE" />
          <XAxis />
          <YAxis />
        </XYPlot>
        </Col>
      </Row>
      );
  }

  return(
    <Row className="rounded-2 bg-white bg-opacity-10 p-1 m-4">
      <Row>
        <Col>Question</Col>
      </Row>
      <Row>
        {answerList}
      </Row>
    </Row>
  );
}

export default SurveyResult;
