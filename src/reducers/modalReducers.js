const initialProps = {
  stateModalAddTweet: false,
};

export default function modalReducers(state = initialProps, action) {
  switch (action.type) {
    case "STATE_ADD_TWEET_MODAL":
      return {
        ...state,
        stateModalAddTweet: action.payload,
      };

    default:
      return state;
  }
}
