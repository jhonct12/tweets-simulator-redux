import { Button, Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweetAction } from "../actions/tweetsActions";

export default function TweetList() {
  const tweets = useSelector((state) => state.tweets.tweets);

  return tweets.map((tweet) => {
    return <Tweet key={tweet.id} tweet={tweet}></Tweet>;
  });
}

function Tweet({ tweet }) {
  const dispatch = useDispatch();
  const deleteTweet = (id) => dispatch(deleteTweetAction(id));

  return (
    <Card className="mb-3 mt-3">
      <CardBody>
        <CardTitle>{tweet.name}</CardTitle>
        <CardText>{tweet.tweet}</CardText>
        <Button variant="danger" onClick={() => deleteTweet(tweet.id)}>
          Eliminar Tweet
        </Button>
      </CardBody>
    </Card>
  );
}
