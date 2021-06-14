import { Form } from "react-bootstrap";

const LANGUAGE_DATA = [
  { name: "Javascript" },
  { name: "Java" },
  { name: "Python" },
  { name: "C++" },
  { name: "Ruby" },
  { name: "PHP" },
];

const MyForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Your Name</Form.Label>
        <Form.Control type='name' placeholder='Enter Your Name' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Your Favorite Language</Form.Label>
        <Form.Control as='select'>
          {LANGUAGE_DATA.map((lang) => (
            <option>{lang.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default MyForm;
