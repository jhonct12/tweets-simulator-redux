import { Button, Container, Navbar, NavbarBrand } from "react-bootstrap";
import LogoRedux from "../assets/img/redux.png";
import { useDispatch } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalActions";

export default function Menu() {
  const dispatch = useDispatch();
  const openCloseAddTweetModal = (state) =>
    dispatch(openCloseAddTweetModalAction(state));

  const openModal = () => {
    openCloseAddTweetModal(true);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavbarBrand>
          <img
            alt="Tweets Simulator Redux"
            src={LogoRedux}
            width={30}
            height={30}
            className="d-inline-block aling-top mr-4"
          ></img>
          Tweets Simulator Redux
        </NavbarBrand>
        <Button variant="outline-success" onClick={openModal}>
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  );
}
