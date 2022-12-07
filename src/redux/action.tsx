import { FETCH_DATA, THEME_COLOR } from "./constants"

export const productList = (word: string) => {

    return {
        type: FETCH_DATA,
        word: word

    }
}

export const themecolor = (word: string) => {

    return {
        type: THEME_COLOR,
        word: word

    }
}