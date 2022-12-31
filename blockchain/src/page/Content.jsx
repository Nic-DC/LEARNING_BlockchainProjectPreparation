import { Tab, Row, Col, ListGroup } from "react-bootstrap";

const Content = () => {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Link 3
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Link 4
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              Link 5
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              Link 6
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">{/* <Sonnet /> */}</Tab.Pane>
            <Tab.Pane eventKey="#link2">{/* <Sonnet /> */}</Tab.Pane>
            <Tab.Pane eventKey="#link3">{/* <Sonnet /> */}</Tab.Pane>
            <Tab.Pane eventKey="#link4">{/* <Sonnet /> */}</Tab.Pane>
            <Tab.Pane eventKey="#link5">{/* <Sonnet /> */}</Tab.Pane>
            <Tab.Pane eventKey="#link6">{/* <Sonnet /> */}</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
export default Content;
