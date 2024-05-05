import { useState } from "react";
import { Alert, Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationsActions";
import { addTweetAction } from "../actions/tweetsActions";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { openCloseAddTweetModalAction } from "../actions/modalActions";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({ name: "", tweet: "" });

  const dispatch = useDispatch();

  const errorForm = (state) => dispatch(validationFormAddTweetAction(state));
  const addTweet = (state) => dispatch(addTweetAction(state));
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  const errorFormValue = useSelector(
    (state) => state.validations.errorFormAddTweet
  );

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, tweet } = formValue;
    if (!name || !tweet) {
      errorForm(true);
    } else {
      errorForm(false);
      addTweet({ ...formValue, id: uuidv4(), date: moment().format() });
      closeModal(false);
    }
  };
  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <FormGroup className="text-center"></FormGroup>
      <FormGroup>
        <FormControl
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
        ></FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl
          as="textarea"
          name="tweet"
          row="3"
          placeholder="Escribe lo que quieres comunicar"
        ></FormControl>
      </FormGroup>
      <Button variant="primary" type="submit">
        Enviar Tweet
      </Button>
      {errorFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
}
