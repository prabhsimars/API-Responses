import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useState } from "react";
function App() {
  
  // API 01 State
  const [btn01, setbtn01] = useState({
    start: "",
    end: "",
    startSave: "",
    endSave: "",
  });

  // API 02 State
  const [btn02, setbtn02] = useState({
    start: "",
    end: "",
    startSave: "",
    endSave: "",
  });

  // API 03 State
  const [btn03, setbtn03] = useState({
    start: "",
    end: "",
    startSave: "",
    endSave: "",
  });

  // API 04 State
  const [btn04, setbtn04] = useState({
    start: "",
    end: "",
    startSave: "",
    endSave: "",
  });

  async function btn01clicked() {
    const fetchstart01 = new Date().getTime();
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const responseJson = await response.json();
    const timeTaken01 = new Date().getTime();
    console.log("button01 clicked");
    const localsave01 = new Date().getTime();
    localStorage.setItem('items01', JSON.stringify(responseJson));
    const localsavetimetaken01 = new Date().getTime();
    setbtn01({
      start: fetchstart01,
      end: timeTaken01,
      startSave: localsave01,
      endSave: localsavetimetaken01,
    });
    return responseJson;
  }


  function btn02clicked() {
    const fetchstart02 = new Date().getTime();
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((responseJson) => {
        const timeTaken02 = new Date().getTime();
        console.log("button02 clicked");
        const localsave02 = new Date().getTime();
        localStorage.setItem('items02', JSON.stringify(responseJson));
        const localsavetimetaken02 = new Date().getTime();
        setbtn02({
          start: fetchstart02,
          end: timeTaken02,
          startSave: localsave02,
          endSave: localsavetimetaken02,
        });
        return responseJson;
      });
  }


  function btn03clicked() {
    const fetchstart03 = new Date().getTime();
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((responseJson) => {
        const timeTaken03 = new Date().getTime();
        console.log("button03 clicked");
        const localsave03 = new Date().getTime();
        localStorage.setItem('items03', JSON.stringify(responseJson));
        const localsavetimetaken03 = new Date().getTime();
        setbtn03({
          start: fetchstart03,
          end: timeTaken03,
          startSave: localsave03,
          endSave: localsavetimetaken03,
        });
        return responseJson;
      });
  }


  function btn04clicked() {
    const fetchstart04 = new Date().getTime();
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        const timeTaken04 = new Date().getTime();
        console.log("button04 clicked");
        const localsave04 = new Date().getTime();
        localStorage.setItem('items04', JSON.stringify(responseJson));
        const localsavetimetaken04 = new Date().getTime();
        setbtn04({
          start: fetchstart04,
          end: timeTaken04,
          startSave: localsave04,
          endSave: localsavetimetaken04,
        });
        return responseJson;
      });
  }



  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col id="Appname">
            <h2>Test App</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <div className="items-div">
              <h3>01</h3>
              <h4>Start: {btn01.start}</h4>
              <h4>End: {btn01.end}</h4>
              <h4>Start Save: {btn01.startSave}</h4>
              <h4>End Save: {btn01.endSave}</h4>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="items-div">
              <h3>02</h3>
              <h4>Start: {btn02.start}</h4>
              <h4>End: {btn02.end}</h4>
              <h4>Start Save: {btn02.startSave}</h4>
              <h4>End Save: {btn02.endSave}</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <div className="items-div">
              <h3>03</h3>
              <h4>Start: {btn03.start}</h4>
              <h4>End: {btn03.end}</h4>
              <h4>Start Save: {btn03.startSave}</h4>
              <h4>End Save: {btn03.endSave}</h4>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="items-div">
              <h3>04</h3>
              <h4>Start: {btn04.start}</h4>
              <h4>End: {btn04.end}</h4>
              <h4>Start Save: {btn04.startSave}</h4>
              <h4>End Save: {btn04.endSave}</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="btnsgroup" xs={6} lg={6}>
            <Button size="lg" variant="primary" onClick={btn01clicked}>
              Button 1
            </Button>
          </Col>
          <Col className="btnsgroup" xs={6} lg={6}>
            <Button size="lg" variant="primary" onClick={btn02clicked}>
              Button 2
            </Button>
          </Col>
        </Row>

        <Row>
          <Col className="btnsgroup" xs={6} lg={6}>
            <Button size="lg" variant="primary" onClick={btn03clicked}>
              Button 3
            </Button>
          </Col>
          <Col className="btnsgroup" xs={6} lg={6}>
            <Button size="lg" variant="primary" onClick={btn04clicked}>
              Button 4
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
