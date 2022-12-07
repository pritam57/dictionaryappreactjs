
import { FETCH_DATA, SET_WORD_DATA, THEME_COLOR } from "./constants";

export const worddata = (data = [], action: any) => {
    switch (action.type) {

        case FETCH_DATA:
            return data;

        case SET_WORD_DATA:
            //  console.log("data successfully recieved" + action.resp)
            return data = action.resp;

        default:
            return data;
    }
}

export const themedata = (data = "dark", action: any) => {
    switch (action.type) {

        case THEME_COLOR:
            console.log(action.word + "from reducer")
            return data = action.word;

        default:
            return data;
    }
}