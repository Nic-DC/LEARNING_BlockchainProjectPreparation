import { Form } from "react-bootstrap";

const ModalForm = ({ name, nameChange, category, categoryChange, content, contentChange }) => {
  return (
    <>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Control type="text" placeholder="your task's name" value={name} onChange={(e) => nameChange(e)} />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Control
          type="text"
          placeholder="your task's category"
          value={category}
          onChange={(e) => categoryChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1" value={content} onChange={(e) => contentChange(e)}>
        <Form.Control as="textarea" rows={6} placeholder="your task's content..." />
      </Form.Group>
    </>
  );
};
export default ModalForm;
