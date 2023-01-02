// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Content from "./page/Content";
import Sidebar from "./page/Sidebar";
import Social from "./page/Social";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="mt-5 d-flex justify-content-center align-items-start text-center">
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={4}>
            <Content />
          </Col>
          <Col md={1} className="align-self-center">
            <Social />
          </Col>
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
