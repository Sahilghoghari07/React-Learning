import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../constants/counterConstants";

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return { count: state.count + 1 };

        case COUNTER_DECREMENT:
            return { count: state.count - 1 };

        default:
            return state;
    }
};

export default counterReducer;
