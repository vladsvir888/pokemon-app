import { DARK_MODE } from "../constants";

const initialState = {
    // проверяем режим из локального хранилища, если ложно, то будет ложно, иначе верно
    isdarkMode: Boolean(JSON.parse(localStorage.getItem('darkmode')))
};

const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DARK_MODE:
            return {
                ...state,
                isdarkMode: action.payload
            };
        default:
            return state;
    }
};

export default darkModeReducer;