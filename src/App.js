import { Container } from "react-bootstrap";
import Menu from "./components/Menu";

import store from "./store";
import { Provider } from "react-redux";
import Modal from "./components/Modal";
import FormAddTweet from "./components/FormAddTweet";
import TweetList from "./components/TweetList";

export default function App() {
  return (
    <Provider store={store}>
      <Menu></Menu>
      <Container className="mt-5">
        <h1 className="text-center">TWEETS</h1>
        <TweetList></TweetList>
      </Container>
      <Modal>
        <FormAddTweet></FormAddTweet>
      </Modal>
    </Provider>
  );
}
