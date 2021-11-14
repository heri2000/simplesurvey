import { Component } from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import { FadeTransform } from 'react-animation-components'
import "./EditSurveyComponent.css"

const TEXT = "TEXT";
const MULTIPLE_CHOICE = "MULTIPLE_CHOICE";

class EditSurvey extends Component {
  render() {
    return(
      <div className="EditSurvey-bg">
        <FadeTransform in
          transformProps={{ exitTransform: 'translateY(20px)' }} className="col-12">
          <Container>
            <RenderHeader {...this.props} />
            <RenderSurvey {...this.props} />
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

class RenderSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 1,
      maxQuestionNumber: 1,
      questionType: MULTIPLE_CHOICE
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handlePrevQuestion = this.handlePrevQuestion.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.handleQuestionTypeChange = this.handleQuestionTypeChange.bind(this);
  }

  handleCancel() {
    this.props.history.push("/list");
  }

  handlePublish() {
    this.handleCancel();
  }

  handlePrevQuestion() {
    if (this.state.questionNumber > 1) {
      this.setState({...this.state, questionNumber: this.state.questionNumber - 1});
    }
  }

  handleQuestionTypeChange(event) {
    this.setState({...this.state, questionType: event.target.value});
  }

  handleNextQuestion() {
    let questionNumber = this.state.questionNumber + 1;
    let maxQuestionNumber = this.state.maxQuestionNumber;
    if (questionNumber > maxQuestionNumber) maxQuestionNumber = questionNumber;
    this.setState({ ...this.state, questionNumber: questionNumber, maxQuestionNumber: maxQuestionNumber });
  }

  render() {
    return(
      <Row className="mt-4 mb-4 rounded-2 bg-white bg-opacity-25 p-2">
        <Col className="col-12">

          <Row className="rounded-2 bg-white bg-opacity-25 p-1">
            <Col className="col-12 mt-2">
              <Label htmlFor="surveyTitle">Survey Title</Label>
            </Col>
            <Col className="col-12 mb-1">
              <Input type="text" name="surveyTitle" id="surveyTitle" placeholder="Survey Title" />
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col className="col-11 mt-4 mb-2 bg-white rounded-2 bg-opacity-10 p-4">
              <RenderQuestionNumber
                questionNumber={this.state.questionNumber}
                maxQuestionNumber={this.state.maxQuestionNumber}
                handlePrevQuestion={this.handlePrevQuestion}
                handleNextQuestion={this.handleNextQuestion}
                />
              <Row mt-4>
                <Col><hr /></Col>
              </Row>
              <RenderQuestion
                questionType={this.state.questionType}
                handleQuestionTypeChange={this.handleQuestionTypeChange} />
              {this.state.questionType === MULTIPLE_CHOICE ? <AnswerList /> : null}
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mt-2 mb-4">
            <Col className="col-11 d-flex justify-content-end">
              <button
                className="btn btn-outline-light"
                onClick={this.handleCancel}>
                  Cancel
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-danger"
                onClick={this.handlePublish}>
                  Publish
              </button>
            </Col>
          </Row>

        </Col>
      </Row>
    );
  }
}

function RenderQuestionNumber({
    questionNumber, maxQuestionNumber,
    handlePrevQuestion, handleNextQuestion}) {
  let rightButtonIcon = "fa fa-caret-right fa-lg";
  if (questionNumber >= maxQuestionNumber) {
    rightButtonIcon = "fa fa-plus fa-lg";
  }
  return(
    <Row>
      <Col className="col-1 d-flex justify-content-start">
        <button className="btn btn-outline-light" onClick={handlePrevQuestion}>
          <span className="fa fa-caret-left fa-lg"></span>
        </button>
      </Col>
      <Col className="col-10 text-center">
        <h2>#{questionNumber} of {maxQuestionNumber}</h2>
      </Col>
      <Col className="col-1 d-flex justify-content-end">
        <button className="btn btn-outline-light" onClick={handleNextQuestion}>
          <span className={rightButtonIcon}></span>
        </button>
      </Col>
    </Row>
  );
}

function RenderQuestion({questionType, handleQuestionTypeChange}) {
  return(
    <div>
      <Row mt-4>
        <Col className="col-12 mt-2">
          <Label htmlFor="question">Question</Label>
        </Col>
        <Col className="col-12 mb-1">
          <Input type="text" name="question" id="question" placeholder="Question" />
        </Col>
      </Row>
      
      <Row className="col-12 d-flex justify-content-start mt-3">
        <Col className="col-12 col-md-3">Question Type</Col>
        <Col className="form-check col-12 col-md-2 offset-1 offset-md-0">
          <input className="form-check-input" type="radio"
            name="questionType" id="questionTypeText"
            value={TEXT} onChange={handleQuestionTypeChange}
            checked={questionType === TEXT} />
          <label classname="form-check-label" htmlFor="questionTypeText">Text</label>
        </Col>
        <Col className="form-check col-12 col-md-4 offset-1 offset-md-0">
          <input className="form-check-input" type="radio"
            name="questionType" id="questionTypeMultipleChoice"
            value={MULTIPLE_CHOICE} onChange={handleQuestionTypeChange}
            checked={questionType === MULTIPLE_CHOICE} />
          <label classname="form-check-label" htmlFor="questionTypeMultipleChoice">Multiple choice</label>
        </Col>
      </Row>
    </div>
  );
}

function AnswerList() {
  const answers = [1, 2, 3, 4].map(number => {
    return <RenderAnswer number={number} />
  });

  return(
    <div>
      <Row>
        <Col className="col-11">{answers}</Col>
      </Row>
      <Row>
        <Col className="col-2 offset-1">
          <button className="btn btn-outline-light">Add Answer</button>
        </Col>
      </Row>
    </div>
  );
}

function RenderAnswer({number}) {
  return(
    <div>
      <Row className="mt-1">
        <Col className="col-1 d-flex justify-content-end mt-1">
          {number}.
        </Col>
        <Col className="col-11">
          <Input type="text" name={"answer" + number} /><br />
        </Col>
      </Row>
    </div>
  );
}

export default EditSurvey;
