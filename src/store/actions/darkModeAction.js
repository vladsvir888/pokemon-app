import { DARK_MODE } from "store/constants";

export const handledarkMode = (value) => { // value - true или false
    localStorage.setItem('darkmode', value);

    return {
        type: DARK_MODE,
        payload: value
    };
};