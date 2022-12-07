import React from 'react';
import axios from 'axios';

import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_DATA, SET_WORD_DATA } from './constants'


function* getProducts(action: any): any {
    console.log(action.word + "from saga");
    let searchword: any = action.word;

    try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`
        const resp = yield call(() => axios.get(url))
        console.log(resp);
        yield put({ type: SET_WORD_DATA, resp })
    }
    catch (error) {
        console.log(error);
        alert("sorry data not  found in dictionary");
    }
}


function* productsaga() {

    yield takeEvery(FETCH_DATA, getProducts)
}

export default productsaga;