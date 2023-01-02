import { Tab, Row, Col, ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, mollitia? Similique omnis odit expedita hic
              tempora quas porro blanditiis iusto ipsam laborum ab est distinctio, commodi ducimus veniam! Eligendi,
              autem.
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
      </Row>
    </Tab.Container>
  );
};
export default Sidebar;
