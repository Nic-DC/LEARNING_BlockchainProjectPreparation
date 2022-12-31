// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Content from "./page/Content";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="mt-4 d-flex justify-center align-items-center">
          <Col md={3}>Sidebar</Col>
          <Col md={5}>
            <Content />
          </Col>
          <Col md={1}>Social</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

// <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//             Learn React
//           </a>
//         </header>
//       </div>
