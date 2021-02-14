import axios from 'axios';

import {API_BASE_URL, BILLING_SUMMARY_FETCHED} from '../helpers/Consts'; //a desestruturação não funcionou com o export default

export function getSummary() {
    //Essa chamada é assíncrona, do jeito normal a action vai passar
    //e retornar um valor que ainda não foi definido
    //o middleware serve para aguardar essa Promise do axios
    const request = axios.get(`${API_BASE_URL}/billingCycles/summary`);
    //console.log("Request 1: ", request.data);
    return {
        type: BILLING_SUMMARY_FETCHED,
        payload: request
    }
}