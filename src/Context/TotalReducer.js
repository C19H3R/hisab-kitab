import { GIVEN_AMOUNT, RETURNED_AMOUNT } from "./actions.types";

const TotalReducer=(state, action) => {
  switch (action.type) {
    case GIVEN_AMOUNT:{
        console.log(typeof state);
        
      return parseFloat(state)+parseFloat(action.payload);
    }
    case RETURNED_AMOUNT:
      return parseFloat(state)-parseFloat(action.payload);

    default:
      return state;
  }
};

export default TotalReducer
